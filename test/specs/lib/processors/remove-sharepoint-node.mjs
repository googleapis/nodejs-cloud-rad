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
import {globResults} from '../../../helpers.mjs';
import {join} from 'path';
import removeSharepointNode from '../../../../lib/processors/remove-sharepoint-node.mjs';

describe('remove SharePoint node processor', () => {
  it('removes the first item, but not its children, if it is a SharePoint node', async () => {
    const obj = {
      items: [
        {
          name: 'SharePoint Framework reference',
          href: '~/overview/sharepoint.md',
          items: [
            {
              name: 'common',
              uid: '@google-cloud/common!',
              items: [],
            },
          ],
        },
      ],
    };

    await removeSharepointNode.process({obj});

    assert.deepStrictEqual(obj.items[0], {
      name: 'common',
      uid: '@google-cloud/common!',
      items: [],
    });
  });

  it('leaves the first item alone if it is not a SharePoint node', async () => {
    const obj = {
      items: [
        {
          name: 'common',
          uid: '@google-cloud/common!',
          items: [],
        },
      ],
    };

    await removeSharepointNode.process({obj});

    assert.deepStrictEqual(obj.items[0], {
      name: 'common',
      uid: '@google-cloud/common!',
      items: [],
    });
  });

  it('asks to process toc.yml files', async () => {
    const actual = await globResults(
      join(process.cwd(), 'test', 'fixtures', 'sample-yaml-dir', 'yaml'),
      removeSharepointNode.globPatterns
    );

    assert.deepStrictEqual(actual, ['toc.yml']);
  });
});
