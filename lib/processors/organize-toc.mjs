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
  return str.match(VERSION_ID_REGEXP)?.[0];
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

  // Sort by version number if possible.
  if (aMatch.groups.version < bMatch.groups.version) {
    return -1;
  }
  if (aMatch.groups.version > bMatch.groups.version) {
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

class TocProcessor {
  constructor(metadata, obj) {
    const apiModel = new ApiModel();
    const apiPackage = apiModel.loadPackage(
      join(metadata.tmpDir, `${metadata.packageShortName}.api.json`)
    );

    this._obj = obj;
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

    this.noKind = [];
    Object.keys(TOC_KINDS).forEach(kind => {
      // Start with an empty list of items for each kind.
      this[kind] = [];
    });
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
      // also check that the item is associated with the most recent exported
      // API version.
      if (this._isNewestExportedVersion(item)) {
        this._mainItem.items.push(item);
      }
      // Don't mess with items that have UIDs like `@google-cloud/foo!`, or a
      // kind that we don't recognize.
      else if (!kind || !Object.prototype.hasOwnProperty.call(this, kind)) {
        this.noKind.push(item);
      }
      // Group the item under the correct namespace.
      else if (item.uid) {
        const namespace = NAMESPACE_REGEXP.exec(item.uid)[1];
        this[kind][namespace] = this[kind][namespace] ?? [];
        this[kind][namespace].push(item);
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

  _isNewestExportedVersion(item) {
    const newestVersion = this._versions?.[0];

    if (newestVersion && item.uid?.includes(`!${newestVersion}.${item.name}`)) {
      return true;
    }

    return false;
  }

  _organizeToc() {
    Object.keys(TOC_KINDS).forEach(kind => {
      const newItem = {
        name: TOC_KINDS[kind],
        items: [],
      };
      // Add namespaced items to the top of the list.
      for (const namespace of Object.keys(this[kind])) {
        newItem.items.push({
          name: namespace,
          items: this[kind][namespace],
        });
      }
      // Only add the new item to the TOC if it's not empty.
      if (newItem.items.length) {
        this._mainItem.items.push(newItem);
      }
    });

    // Finally, add the items with no kind, or an unrecognized kind.
    this._mainItem.items = this._mainItem.items.concat(this.noKind);
  }

  _sortContainers() {
    Object.keys(TOC_KINDS).forEach(key => {
      Object.keys(this[key]).forEach(namespace => {
        this[key][namespace].sort(tocItemSorter);
      });
    });

    return this;
  }

  process() {
    this._categorizeItems()._sortContainers()._organizeToc();

    return this._obj;
  }
}

async function process({metadata, obj}) {
  const processor = new TocProcessor(metadata, obj);

  return Promise.resolve(processor.process());
}

export default {globPatterns, process};
