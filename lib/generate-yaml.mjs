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

import {execaNode} from 'execa';
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
}
