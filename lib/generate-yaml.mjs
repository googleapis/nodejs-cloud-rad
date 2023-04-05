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

async function execAndLog(nodeBin, args, cwd) {
  const cmd = join(process.cwd(), 'node_modules', '.bin', nodeBin);
  const opts = {cwd};

  opts.stdout = process.stdout
  opts.stderr = process.stderr

  return execaNode(cmd, args, opts);
}

export default async function generate({cloudRadPath, cwd}) {
  const outputDir = join(cwd, 'yaml');
  const tmpDir = await fs.mkdtemp(join(cwd, 'cloud-rad-'));

  // Create API Extractor config file for the package.
  const apiExtractorConfig = {
    extends: join(cloudRadPath, 'api-extractor.json'),
    mainEntryPointFilePath: join(cwd, 'build', 'src', 'index.d.ts'),
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
  await execAndLog('api-extractor', ['run', '--local'], tmpDir);
  await fs.copy(apiExtractorTempPath, tmpDir);
  await fs.remove(apiExtractorTempPath);
  await fs.remove(apiExtractorConfigPath);

  await fs.copy(join(cloudRadPath, 'api-extractor-configs'), tmpDir);
  await execAndLog(
    'api-documenter',
    ['yaml', `--input-folder=${tmpDir}`, `--output-folder=${outputDir}`],
    // Use the real cwd so api-documenter can find the code samples.
    process.cwd()
  );

  await fs.remove(tmpDir);
}
