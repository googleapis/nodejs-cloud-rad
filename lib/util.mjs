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
import {execa, execaNode} from 'execa';
import {minimatch} from 'minimatch';
import * as url from 'url';

export const cloudRadDir = url.fileURLToPath(new URL('..', import.meta.url));

export function matchesGlobs(filepath, globPatterns) {
  for (const pattern of globPatterns) {
    if (minimatch(filepath, pattern)) {
      return true;
    }
  }

  return false;
}

export function recursiveFilter(obj, itemsProp, valueProp, filterRegExps) {
  if (obj[itemsProp]) {
    obj[itemsProp] = obj[itemsProp].filter(item => {
      const value = item[valueProp];
      const shouldKeep = !filterRegExps.some(regExp => regExp.test(value));

      if (shouldKeep) {
        recursiveFilter(item, itemsProp, valueProp, filterRegExps);
      }

      return shouldKeep;
    });
  }
}

export function replace(values, valueProp, replacerMap) {
  values.forEach(item => {
    if (item[valueProp]) {
      item[valueProp] = item[valueProp].map(valuePropItem => {
        for (const [pattern, replacement] of replacerMap) {
          valuePropItem = valuePropItem.replace(pattern, replacement);
        }

        return valuePropItem;
      });
    }
  });
}

/**
 * Executes command in a subprocess.
 *
 * @param {string} cmd The command to run in the subprocess.
 * @param {Array<string>} args Additional args to include when running the command.
 * @param {string} cwd The working directory in which to run the command.
 * @param {boolean=} isNodeCmd If set, command will be run in Node.
 * @returns A Promise containing the result of the command.
 */
export async function execaAndLog(cmd, args, cwd, isNodeCmd = false) {
  const opts = {cwd};

  opts.stdout = process.stdout
  opts.stderr = process.stderr

  if (isNodeCmd) {
    return execaNode(cmd, args, opts);
  } else {
    return execa(cmd, args, opts);
  }
}
