/*
  Copyright 2023 Google LLC

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      https://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

import {ApiModel} from '@microsoft/api-extractor-model';
import {
  KIND_REGEXP,
  NAMESPACE_REGEXP,
  TITLE_KIND_REGEXP,
  VERSION_ID_REGEXP,
  VERSION_ID_REGEXP_GROUPS,
} from '../regexp.mjs';
import {join} from 'path';
import {recursiveForEach} from '../util.mjs';

const LAUNCH_STAGE_SORT_ORDER = ['alpha', 'beta', /* GA */ undefined];
const TOC_KINDS = {
  class: 'Classes',
  interface: 'Interfaces',
  enum: 'Enums',
};

const globPatterns = ['**/toc.yml'];

// Extracts the version ID, if present, from a string.
function extractVersionId(str) {
  return str?.match(VERSION_ID_REGEXP)?.[0];
}

// Adds an entry point's version ID, if present, to the set of version IDs.
function addEntryPointVersion(entryPoint, versions) {
  for (const member of entryPoint.members) {
    const version = extractVersionId(member.name);
    if (version) {
      versions.add(version);
    }
  }
}

// Finds versions that are exported by the package's `index.d.ts` file.
function findExportedVersions(apiPackage) {
  let versions = new Set();

  for (const entryPoint of apiPackage.entryPoints) {
    addEntryPointVersion(entryPoint, versions);
  }

  // Convert versions to an array, sorted from newest to oldest version.
  return [...versions].sort(apiVersionSorter).reverse();
}

// Sorts by API version identifier, from oldest to newest.
function apiVersionSorter(a, b) {
  const aMatch = a.match(VERSION_ID_REGEXP_GROUPS);
  const bMatch = b.match(VERSION_ID_REGEXP_GROUPS);

  // Sort by version number and patch version if possible.
  if (
    aMatch.groups.version < bMatch.groups.version ||
    (aMatch.groups.version === bMatch.groups.version &&
      aMatch.groups.patchVersion < bMatch.groups.patchVersion)
  ) {
    return -1;
  }
  if (
    aMatch.groups.version > bMatch.groups.version ||
    (aMatch.groups.version === bMatch.groups.version &&
      aMatch.groups.patchVersion > bMatch.groups.patchVersion)
  ) {
    return 1;
  }

  // Fall back on launch stage.
  if (
    LAUNCH_STAGE_SORT_ORDER.indexOf(aMatch.groups.stage) <
    LAUNCH_STAGE_SORT_ORDER.indexOf(bMatch.groups.stage)
  ) {
    return -1;
  }
  if (
    LAUNCH_STAGE_SORT_ORDER.indexOf(aMatch.groups.stage) >
    LAUNCH_STAGE_SORT_ORDER.indexOf(bMatch.groups.stage)
  ) {
    return 1;
  }

  // Finally, try the version number associated with the launch stage.
  if (aMatch.groups.stageVersion < bMatch.groups.stageVersion) {
    return -1;
  }
  if (aMatch.groups.stageVersion > bMatch.groups.stageVersion) {
    return 1;
  }

  return 0;
}

// Sorts classes by their names, in lexicographic order, and then by their API
// version identifiers, from newest to oldest.
function versionedClassSorter(a, b) {
  const aVersionId = extractVersionId(a.uid);
  const bVersionId = extractVersionId(b.uid);
  const itemSortResult = tocItemSorter(a, b);

  // Only call `apiVersionSorter` if both class names have the same sort order.
  // `apiVersionSorter` sorts from oldest to newest; we need newest to oldest.
  return itemSortResult || apiVersionSorter(aVersionId, bVersionId) * -1;
}

// Sorts lexicographically by the name of each TOC item.
function tocItemSorter(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}

// Sorts a TOC section so that namespaces in the current package come first,
// followed by other namespaces. For example, in the package
// `@google-cloud/foo`, `protos.google.cloud.foo.v1` comes before
// `protos.google.api`.
function tocNamespaceSorter(packageNamespacePart, a, b) {
  const aInPackage = a.includes(packageNamespacePart);
  const bInPackage = b.includes(packageNamespacePart);

  if (aInPackage && !bInPackage) {
    return -1;
  }
  if (!aInPackage && bInPackage) {
    return 1;
  }
  return tocItemSorter({name: a}, {name: b});
}

class TocProcessor {
  constructor(metadata, obj) {
    const apiModel = new ApiModel();
    const apiPackage = apiModel.loadPackage(
      join(metadata.tmpDir, `${metadata.packageShortName}.api.json`)
    );

    this._obj = obj;
    // A string whose presence in the namespace indicates that the namespace
    // belongs to the current package.
    this._packageNamespacePart = '.' + metadata.packageShortName + '.';
    // We normally check the API model to determine which versions are exported.
    // However, we also allow tests to specify the available versions in the
    // `metadata` object.
    this._versions = metadata._versions ?? findExportedVersions(apiPackage);

    // The TOC should have only one main item, which is the library.
    this._mainItem = obj.items.find(
      item => item.uid === `${metadata.packageInfo.name}!`
    );
    // Remove the main item's children. We'll add them back later, after we
    // reorganize them. We store them in an `items` property so that we can
    // recursively iterate over that property.
    this._items = {
      items: this._mainItem.items.splice(0),
    };
    this._topLevelClasses = [];

    this.noKind = [];
    Object.keys(TOC_KINDS).forEach(kind => {
      this[kind] = {
        // Maps namespaces to the items they contain.
        namespaces: {},
        // Items with no namespace.
        root: [],
      };
    });
  }

  // Appends the API version that a class is tied to to the class's name.
  _addVersionToClassName(item) {
    const exportedVersion = this._exportedVersion(item);
    // Only append the API version if there's more than one version.
    if (exportedVersion && this._versions.length > 1) {
      item.name = item.name + ` (${exportedVersion})`;
    }
  }

  _categorizeItems() {
    recursiveForEach(this._items, 'items', item => {
      let kind = item.uid?.match(KIND_REGEXP);

      if (kind) {
        // Use the captured value as the kind.
        kind = kind[1];
      }
      // Remove ` (Class)` from titles like `FooBar (Class)`.
      item.name = item.name.replace(TITLE_KIND_REGEXP, '');

      // The package's top-level exported classes get special treatment. To
      // confirm that the item represents a top-level exported class, we must
      // also check that the item is associated with an exported API version.
      const exportedVersion = this._exportedVersion(item);
      if (exportedVersion) {
        this._topLevelClasses.push(item);
      }
      // Some items have UIDs like `@google-cloud/foo!`, and no kind. Don't try
      // to categorize these.
      else if (!kind) {
        this.noKind.push(item);
      }
      // If the item has a kind that we don't recognize, don't try to categorize
      // it. Also, log a warning, because this shouldn't happen.
      else if (!Object.prototype.hasOwnProperty.call(this, kind)) {
        console.warn(
          `Item with UID ${item.uid} has unrecognized kind "${kind}".`
        );
        this.noKind.push(item);
      }
      // Group the item under the correct namespace, if one exists. (UIDs like
      // `@google-cloud/foo!Bar:class` don't have a namespace.)
      else if (item.uid) {
        const namespaceMatches = NAMESPACE_REGEXP.exec(item.uid);
        if (namespaceMatches) {
          const namespace = namespaceMatches[1];
          this[kind].namespaces[namespace] =
            this[kind].namespaces[namespace] ?? [];
          this[kind].namespaces[namespace].push(item);
        } else {
          this[kind].root.push(item);
        }
      }
      /* c8 ignore start */
      // We shouldn't get here.
      else {
        throw new Error(`Unable to categorize item: ${JSON.stringify(item)}`);
      }
      /* c8 ignore stop */
    });

    return this;
  }

  // Finds the API version that an item belongs to, but only if that version is
  // exported. Returns `null` if the item does not belong to an API version, or
  // if it belongs to a version that is not exported.
  _exportedVersion(item) {
    // Exported versions of a class always have a UID.
    if (item.uid) {
      for (const version of this._versions) {
        if (item.uid.includes(`!${version}.${item.name}`)) {
          return version;
        }
      }
    }

    return null;
  }

  _organizeToc() {
    const namespaceSorter = tocNamespaceSorter.bind(
      null,
      this._packageNamespacePart
    );

    // Sort the top-level exported classes by name and API version, from newest
    // to oldest. Add a version identifier to each class, then add the classes
    // to the TOC's main item.
    this._topLevelClasses.sort(versionedClassSorter);
    this._topLevelClasses.map(item => this._addVersionToClassName(item));
    this._mainItem.items = this._mainItem.items.concat(this._topLevelClasses);

    Object.keys(TOC_KINDS).forEach(kind => {
      const newItem = {
        name: TOC_KINDS[kind],
        items: [],
      };
      // Add versions and namespaced items to the top of the list.
      for (const namespace of Object.keys(this[kind].namespaces).sort(
        namespaceSorter
      )) {
        const namespaceItems = this[kind].namespaces[namespace];
        // Sort the items in the namespace.
        namespaceItems.sort(tocItemSorter);
        newItem.items.push({
          name: namespace,
          items: namespaceItems.slice(),
        });
      }
      // Then add non-namespaced items.
      this[kind].root.sort(tocItemSorter);
      newItem.items = newItem.items.concat(this[kind].root);

      // Only add the new item to the TOC if it's not empty.
      if (newItem.items.length) {
        this._mainItem.items.push(newItem);
      }
    });

    // Finally, add the items with no kind, or an unrecognized kind.
    this._mainItem.items = this._mainItem.items.concat(this.noKind);
  }

  process() {
    this._categorizeItems()._organizeToc();

    return this._obj;
  }
}

async function process({metadata, obj}) {
  const processor = new TocProcessor(metadata, obj);

  return Promise.resolve(processor.process());
}

export default {globPatterns, process};
