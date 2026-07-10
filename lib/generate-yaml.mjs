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

import {execaNode, execa} from 'execa';
import fs from 'fs-extra';
import {join} from 'path';
import {withLogs} from './util.mjs';

export default async function generate(opts) {
  const cloudRadPath = opts.cloudRadPath;
  const cwd = opts.cwd;
  const outputDir = join(cwd, 'yaml');
  const tmpDir = opts.tmpDir;

  let mainEntryPointFilePath = join(cwd, 'build', 'src', 'index.d.ts')
  if (!fs.existsSync(mainEntryPointFilePath)) {
    mainEntryPointFilePath = join(cwd, 'build', 'cjs', 'src', 'index.d.ts')
  }

  // Create API Extractor config file for the package.
  const apiExtractorConfig = {
    extends: join(cloudRadPath, 'api-extractor.json'),
    mainEntryPointFilePath: mainEntryPointFilePath,
    projectFolder: cwd,
  };
  const apiExtractorConfigPath = join(cwd, 'api-extractor.json');
  // It should be possible to override this default value in the config file via
  // `apiReport.reportTempFolder`, but getting that to work will require more
  // experimentation.
  const apiExtractorTempPath = join(cwd, 'temp');

  await fs.writeFile(
    apiExtractorConfigPath,
    JSON.stringify(apiExtractorConfig, null, 2)
  );
  await fs.ensureDir(apiExtractorTempPath);
  const apiExtractorCmd = join(
    process.cwd(),
    'node_modules',
    '.bin',
    'api-extractor'
  );
  await withLogs(execaNode)(apiExtractorCmd, ['run', '--local'], tmpDir);
  await fs.copy(apiExtractorTempPath, tmpDir);
  await fs.remove(apiExtractorTempPath);
  await fs.remove(apiExtractorConfigPath);

  await fs.copy(join(cloudRadPath, 'api-extractor-configs'), tmpDir);

  // Track whether we create a symlink so we can clean it up later.
  let createdSymlink = false;

  {
    // This block ensures that region tags inside external samples can be resolved by api-documenter.
    // It clones the nodejs-docs-samples repository and creates a symlink to the relevant package's samples.

    // Define the path where the docs-samples repository will be cloned within the temporary directory.
    const docsSamplesPath = join(tmpDir, 'nodejs-docs-samples');

    // Check if the docs-samples repository has not already been cloned.
    if (!fs.existsSync(docsSamplesPath)) {
      // Execute a shallow git clone of the nodejs-docs-samples repository.
      await withLogs(execa)(
        'git',
        [
          'clone',
          '--depth',
          '1',
          'https://github.com/GoogleCloudPlatform/nodejs-docs-samples.git',
          docsSamplesPath,
        ],
        // Run the clone command inside the temporary directory.
        tmpDir
      );
    }

    // Determine the source path of the specific package's samples within the cloned repository.
    const sampleSrcPath = join(docsSamplesPath, opts.packageShortName);

    // Determine the destination path where the samples symlink should be created in the current working directory.
    const sampleDestPath = join(cwd, 'samples');

    // Check if the source samples directory exists and if a destination samples directory doesn't already exist.
    if (fs.existsSync(sampleSrcPath) && !fs.existsSync(sampleDestPath)) {
      // Create a symlink from the local samples folder to the cloned samples folder.
      await fs.symlink(sampleSrcPath, sampleDestPath);

      // Update the flag to indicate that we created the symlink.
      createdSymlink = true;
    }
  }

  const apiDocumenterCmd = join(
    process.cwd(),
    'node_modules',
    '.bin',
    'api-documenter'
  );
  await withLogs(execaNode)(
    apiDocumenterCmd,
    ['yaml', `--input-folder=${tmpDir}`, `--output-folder=${outputDir}`],
    // Use the real cwd so api-documenter can find the code samples.
    process.cwd()
  );

  if (createdSymlink) {
    await fs.remove(sampleDestPath);
  }
}
