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
import {copy, ensureDir} from 'fs-extra';
import {join} from 'path';

const DEVSITE_DIR = '_devsite';
const YAML_DIR = 'yaml';

export default async function copyYaml({cwd, packageShortName}) {
  const devsitePath = join(cwd, DEVSITE_DIR);
  const devsitePackagePath = join(devsitePath, packageShortName);
  const yamlPath = join(cwd, YAML_DIR);
  const yamlPackagePath = join(yamlPath, packageShortName);

  await ensureDir(devsitePackagePath);
  return Promise.all([
    copy(yamlPackagePath, devsitePackagePath),
    copy(join(yamlPath, 'toc.yml'), join(devsitePath, 'toc.yml')),
    copy(
      join(yamlPath, `${packageShortName}.yml`),
      join(devsitePath, 'overview.yml')
    ),
    copy(join(cwd, 'README.md'), join(devsitePath, 'index.md')),
  ]);
}
