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
import {execa} from 'execa';
import {matchesGlobs, withLogs} from '../lib/util.mjs';
import fs from 'fs-extra';
import klaw from 'klaw';
import os from 'os';

export async function createTmpDir() {
  const systemTmpDir = await fs.realpath(os.tmpdir());

  return fs.mkdtemp(join(systemTmpDir, 'cloud-rad-test-'));
}

export function globResults(fixturePath, globPatterns) {
  return new Promise((resolve, reject) => {
    const files = [];

    klaw(fixturePath)
      .on('data', item => {
        if (
          !item.stats.isDirectory() &&
          matchesGlobs(item.path, globPatterns)
        ) {
          files.push(basename(item.path));
        }
      })
      .on('error', e => {
        reject(e);
      })
      .on('end', () => {
        resolve(files.sort());
      });
  });
}

export const mochaHooks = {
  async beforeAll() {
    // Give ourselves a generous timeout for setup tasks.
    this.timeout(150000);

    // Copy google-cloud-deploy to temp dir; install its dependencies; and build it.
    const tmpDir = (mochaHooks._tmpDir = await createTmpDir());
    const googleCloudDeployDir = (mochaHooks.googleCloudDeployDir = join(
      tmpDir,
      'google-cloud-deploy'
    ));
    await fs.copy(
      join(process.cwd(), 'test', 'fixtures', 'google-cloud-deploy'),
      googleCloudDeployDir
    );

    const samplesDir = join(process.cwd(), 'test', 'fixtures', 'google-cloud-deploy', 'samples')
    process.env.SAMPLES_DIRECTORY = samplesDir

    await withLogs(execa)('npm', ['install'], googleCloudDeployDir);

    return withLogs(execa)('npm', ['run', 'compile'], googleCloudDeployDir);
  },
  async afterAll() {
    return removeTmpDir(mochaHooks._tmpDir);
  },
};

export async function removeTmpDir(tmp) {
  if (!tmp) {
    return Promise.resolve();
  }

  return fs.remove(tmp);
}
