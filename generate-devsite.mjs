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
import copyYaml from './lib/copy-yaml.mjs';
import {fileURLToPath, URL} from 'url';
import fs from 'fs-extra';
import generateYaml from './lib/generate-yaml.mjs';
import {join} from 'path';
import processYaml from './lib/process-yaml.mjs';

export default async function generate(opts = {}) {
  const cloudRadPath = fileURLToPath(new URL('.', import.meta.url));
  const cwd = process.cwd();
  const packageInfo = await fs.readJson(join(cwd, 'package.json'));
  const packageShortName = packageInfo.name.replace('@google-cloud/', '');
  // TODO(jefesaurus): Should google-gax be on this list? Any others?
  const isSharedPackage =
    packageShortName === 'common' || packageShortName === 'google-auth-library';
  const metadata = {
    cloudRadPath,
    cwd,
    isSharedPackage,
    packageInfo,
    packageShortName,
  };

  opts = Object.assign({}, metadata, opts);

  await generateYaml(opts);
  await processYaml(opts);
  await copyYaml(opts);
}
