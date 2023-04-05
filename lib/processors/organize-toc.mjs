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
import {
  EXPORTED_CLASS_REGEXP,
  KIND_REGEXP,
  TITLE_KIND_REGEXP,
} from '../regexp.mjs';
import fs from 'fs-extra';
import {join} from 'path';
import {recursiveForEach} from '../util.mjs';

const TOC_KINDS = {
  class: 'Classes',
  enum: 'Enums',
  interface: 'Interfaces',
};

const globPatterns = ['**/toc.yml'];

// Find classes that are exported by the package's `index.d.ts` file.
async function findTopLevelClasses(cwd) {
  const declarations = join(cwd, 'build', 'src', 'index.d.ts');
  const data = await fs.readFile(declarations, 'utf8');
  const exportedClasses = new Set();
  const matches = [...data.matchAll(EXPORTED_CLASS_REGEXP)];

  matches.forEach(match => {
    // Discard the full string that was matched; we only want capture groups.
    match.shift();
    match.forEach(capture => {
      if (capture) {
        exportedClasses.add(capture);
      }
    });
  });

  return exportedClasses;
}

async function process({metadata, obj}) {
  const topLevelClasses = await findTopLevelClasses(metadata.cwd);
  const mainItem = obj.items[0];
  const tocItems = {
    class: [],
    entryPoints: [],
    enum: [],
    interface: [],
    noKind: [],
  };

  recursiveForEach(mainItem, 'items', item => {
    let kind = item.uid?.match(KIND_REGEXP);

    if (kind) {
      // Use the captured value.
      kind = kind[1];
    }
    // Remove ` (Class)` from titles like `FooBar (Class)`.
    item.name = item.name.replace(TITLE_KIND_REGEXP, '');

    // The package's top-level classes get special treatment.
    if (topLevelClasses.has(item.name)) {
      tocItems.entryPoints.push(item);
    }
    // Don't mess with items that have UIDs like `@google-cloud/foo!`, or a kind
    // that we don't recognize.
    else if (!kind || !Object.prototype.hasOwnProperty.call(tocItems, kind)) {
      tocItems.noKind.push(item);
    } else {
      tocItems[kind].push(item);
    }
  });

  Object.keys(tocItems).forEach(key => {
    // Don't sort items with no kind, or an unrecognized kind.
    if (key !== 'noKind') {
      tocItems[key].sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    }
  });

  mainItem.items = tocItems.noKind.concat(tocItems.entryPoints);
  Object.keys(TOC_KINDS).forEach(kind => {
    if (tocItems[kind].length) {
      mainItem.items.push({
        name: TOC_KINDS[kind],
        items: tocItems[kind],
      });
    }
  });

  return Promise.resolve(obj);
}

export default {globPatterns, process};
