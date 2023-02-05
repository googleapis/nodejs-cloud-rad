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
import {strict as assert} from 'assert';
import {createTmpDir, removeTmpDir} from '../../helpers.mjs';
import fs from 'fs-extra';
import {basename, join} from 'path';
import processYaml from '../../../lib/process-yaml.mjs';
import yaml from 'js-yaml';

const fixturesDir = join(process.cwd(), 'test', 'fixtures', 'sample-yaml-dir');
const metadata = {
  cloudRadPath: process.cwd(),
  cwd: null,
  isSharedPackage: false,
  packageInfo: {},
  packageShortName: 'bigquery',
};
let tmpDir = null;

before(async () => {
  tmpDir = await createTmpDir();
  metadata.cwd = tmpDir;

  return Promise.resolve();
});

after(() => {
  return removeTmpDir(tmpDir);
});

beforeEach(async () => {
  return fs.copy(fixturesDir, tmpDir);
});

describe('process YAML', () => {
  it('only looks at $CWD/yaml', async () => {
    const filepaths = [];
    const processor = {
      globPatterns: ['**/*.yml'],
      process: ({filepath, obj}) => {
        filepaths.push(filepath);

        return Promise.resolve(obj);
      },
    };

    await processYaml(metadata, [processor]);

    // Make sure the test doesn't pass if we didn't process any files.
    assert(filepaths.length >= 1);
    for (const filepath of filepaths) {
      assert.notEqual(basename(filepath), 'not-in-yaml-dir.yml');
    }
  });

  it('only looks at .yml files', async () => {
    const filepaths = [];
    const processor = {
      globPatterns: ['**/*'],
      process: ({filepath, obj}) => {
        filepaths.push(filepath);

        return Promise.resolve(obj);
      },
    };

    await processYaml(metadata, [processor]);

    // Make sure the test doesn't pass if we didn't process any files.
    assert(filepaths.length >= 1);
    for (const filepath of filepaths) {
      assert.notEqual(basename(filepath), 'not-yaml-file.md');
    }
  });

  it('only runs a processor if a file matches one of its glob patterns', async () => {
    const hasMatchesFilepaths = [];
    const hasMatches = {
      globPatterns: ['**/bigquery/*.yml', '**/toc.*'],
      process: ({filepath, obj}) => {
        hasMatchesFilepaths.push(filepath);

        return Promise.resolve(obj);
      },
    };
    const noMatchesFilepaths = [];
    const noMatches = {
      globPatterns: ['does-not-exist/**/*.yml'],
      process: ({filepath, obj}) => {
        noMatchesFilepaths.push(filepath);

        return Promise.resolve(obj);
      },
    };

    await processYaml(metadata, [hasMatches, noMatches]);
    hasMatchesFilepaths.sort();

    assert.equal(hasMatchesFilepaths.length, 2);
    assert.equal(
      hasMatchesFilepaths[0],
      join(tmpDir, 'yaml', 'bigquery', 'bigquery.yml')
    );
    assert.equal(hasMatchesFilepaths[1], join(tmpDir, 'yaml', 'toc.yml'));

    assert.equal(noMatchesFilepaths.length, 0);
  });

  it('writes the updated YAML file', async () => {
    let data;
    const processor = {
      globPatterns: ['**/toc.yml'],
      process: ({obj}) => {
        obj.items[0].uid = obj.items[0].uid.replace('compute', 'storage');

        return Promise.resolve(obj);
      },
    };

    await processYaml(metadata, [processor]);
    data = yaml.load(
      await fs.readFile(join(tmpDir, 'yaml', 'toc.yml'), 'utf8')
    );

    assert.equal(data.items[0].uid, '@google-cloud/storage!');
  });
});
