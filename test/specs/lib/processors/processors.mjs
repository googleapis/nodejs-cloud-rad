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

import {basename, join} from 'path';
import klaw from 'klaw';
import processors from '../../../../lib/processors/processors.mjs';

const EXCLUDED_FILES = ['processors.mjs'];

describe('processors', () => {
  it('exports every processor', () => {
    return new Promise((resolve, reject) => {
      const files = [];

      klaw(join(process.cwd(), 'lib', 'processors'))
        .on('data', item => {
          if (
            !item.stats.isDirectory() &&
            !EXCLUDED_FILES.includes(basename(item.path))
          ) {
            files.push(item.path);
          }
        })
        .on('end', () => {
          try {
            files.forEach(async file => {
              const fileDefault = await import(file);

              assert(processors.includes(fileDefault));
            });
            resolve();
          } catch (e) {
            reject(e);
          }
        });
    });
  });
});
