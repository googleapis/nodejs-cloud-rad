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

// The tests for generate-devsite.mjs also test this module.

import {strict as assert} from 'assert';
import fs from 'fs-extra';
import {join} from 'path';
import generate, {findEntryPoint} from '../../../lib/generate-yaml.mjs';
import {createTmpDir, mochaHooks, removeTmpDir} from '../../helpers.mjs';

describe('generate-yaml', () => {
  it('clones samples repository and creates a symlink', async function () {
    // Increase timeout since this may perform a git clone of nodejs-docs-samples
    this.timeout(150000);

    let symlinkCreated = false;
    let tmpDir;
    const originalSymlink = fs.symlink;
    fs.symlink = async (src, dest) => {
      if (dest.endsWith('samples')) {
        symlinkCreated = true;
      }
      return originalSymlink(src, dest);
    };

    try {
      const cwd = mochaHooks.googleCloudDeployDir;
      tmpDir = await fs.mkdtemp(join(cwd, 'cloud-rad-test-'));
      const destSamples = join(cwd, 'samples');
      if (fs.existsSync(destSamples)) {
        await fs.remove(destSamples);
      }
      
      // Ensure the source directory exists in our mock docs repo to trigger the symlink condition
      const sampleSrcPath = join(tmpDir, 'nodejs-docs-samples', 'google-cloud-deploy');
      await fs.ensureDir(sampleSrcPath);

      await generate({
        cloudRadPath: process.cwd(),
        cwd,
        tmpDir,
        packageShortName: 'google-cloud-deploy',
      });

      assert.ok(symlinkCreated, 'Expected a symlink to be created for the samples directory');
    } finally {
      fs.symlink = originalSymlink;
      if (tmpDir) {
        await fs.remove(tmpDir);
      }
    }
  });
});

describe('findEntryPoint', () => {
  let dir;

  beforeEach(async () => {
    dir = await createTmpDir();
  });

  afterEach(async () => {
    await removeTmpDir(dir);
  });

  const touch = async relPath => {
    await fs.outputFile(join(dir, relPath), '');
    return join(dir, relPath);
  };

  it('prefers build/src/index.d.ts', async () => {
    const expected = await touch('build/src/index.d.ts');
    await touch('build/cjs/src/index.d.ts');
    await fs.writeJson(join(dir, 'package.json'), {types: 'types/index.d.ts'});
    await touch('types/index.d.ts');

    assert.equal(findEntryPoint(dir), expected);
  });

  it('falls back to build/cjs/src/index.d.ts', async () => {
    const expected = await touch('build/cjs/src/index.d.ts');

    assert.equal(findEntryPoint(dir), expected);
  });

  it('uses tsconfig declarationDir, including via extends', async () => {
    const expected = await touch('build/types/src/index.d.ts');
    // Comments and trailing commas are valid in tsconfig files.
    await fs.writeFile(
      join(dir, 'tsconfig.base.json'),
      '{\n  // shared settings\n  "compilerOptions": {"declarationDir": "build/types",},\n}\n'
    );
    await fs.writeJson(join(dir, 'tsconfig.json'), {
      extends: './tsconfig.base.json',
      compilerOptions: {outDir: 'build'},
    });

    assert.equal(findEntryPoint(dir), expected);
  });

  it('uses tsconfig outDir when declarationDir is unset', async () => {
    const expected = await touch('dist/src/index.d.ts');
    await fs.writeJson(join(dir, 'tsconfig.json'), {
      compilerOptions: {outDir: 'dist'},
    });

    assert.equal(findEntryPoint(dir), expected);
  });

  it('falls back to package.json types, then typings', async () => {
    const types = await touch('lib/types.d.ts');
    const typings = await touch('lib/typings.d.ts');

    await fs.writeJson(join(dir, 'package.json'), {
      types: 'lib/types.d.ts',
      typings: 'lib/typings.d.ts',
    });
    assert.equal(findEntryPoint(dir), types);

    await fs.writeJson(join(dir, 'package.json'), {
      typings: 'lib/typings.d.ts',
    });
    assert.equal(findEntryPoint(dir), typings);
  });

  it('throws, listing every path checked, when nothing is found', async () => {
    await fs.writeJson(join(dir, 'tsconfig.json'), {
      compilerOptions: {declarationDir: 'build/types'},
    });
    await fs.writeJson(join(dir, 'package.json'), {types: 'types/index.d.ts'});

    assert.throws(
      () => findEntryPoint(dir),
      err => {
        assert.match(
          err.message,
          /Could not find a TypeScript declaration entry point/
        );
        for (const p of [
          'build/src/index.d.ts',
          'build/cjs/src/index.d.ts',
          'build/types/src/index.d.ts',
          'types/index.d.ts',
        ]) {
          assert.ok(err.message.includes(join(dir, p)), `missing ${p}`);
        }
        return true;
      }
    );
  });
});
