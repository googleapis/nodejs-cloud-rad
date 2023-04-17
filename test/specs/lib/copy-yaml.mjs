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
import copyYaml from '../../../lib/copy-yaml.mjs';
import {createTmpDir, removeTmpDir} from '../../helpers.mjs';
import {dirname, join} from 'path';
import fs from 'fs-extra';

let tmpDir = null;

const fakeFilesystem = [
  ['README.md', 'readme'],
  ['yaml/fake-package/test.txt', 'test'],
  ['yaml/fake-package.yml', 'fake package'],
  ['yaml/toc.yml', 'toc'],
];

before(async () => {
  tmpDir = await createTmpDir();
  for (const [filename, data] of fakeFilesystem) {
    const filepath = join(tmpDir, filename);
    await fs.ensureDir(dirname(filepath));
    await fs.writeFile(filepath, data);
  }
});

after(async () => {
  await removeTmpDir(tmpDir);
});

beforeEach(async () => {
  await copyYaml({cwd: tmpDir, packageShortName: 'fake-package'});
});

afterEach(async () => {
  await fs.remove(join(tmpDir, '_devsite'));
});

describe('copy YAML', () => {
  it('creates the _devsite directory', async () => {
    assert(await fs.pathExists(join(tmpDir, '_devsite')));
  });

  it('copies the package data to _devsite', async () => {
    assert.equal(
      await fs.readFile(
        join(tmpDir, '_devsite', 'fake-package', 'test.txt'),
        'utf8'
      ),
      'test'
    );
  });

  it('copies the TOC to _devsite', async () => {
    assert.equal(
      await fs.readFile(join(tmpDir, '_devsite', 'toc.yml'), 'utf8'),
      'toc'
    );
  });

  it('copies the overview to _devsite/overview.yml', async () => {
    assert.equal(
      await fs.readFile(join(tmpDir, '_devsite', 'overview.yml'), 'utf8'),
      'fake package'
    );
  });

  it('copies the README to _devsite/index.md', async () => {
    assert.equal(
      await fs.readFile(join(tmpDir, '_devsite', 'index.md'), 'utf8'),
      'readme'
    );
  });
});
