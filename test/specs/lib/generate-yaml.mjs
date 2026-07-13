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
import generate from '../../../lib/generate-yaml.mjs';
import {mochaHooks} from '../../helpers.mjs';

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
