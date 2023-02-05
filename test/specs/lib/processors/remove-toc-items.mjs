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
import removeTocItems from '../../../../lib/processors/remove-toc-items.mjs';

describe('remove TOC items processor', () => {
  it('asks to process toc.yml files', async () => {
    const actual = await globResults(
      join(process.cwd(), 'test', 'fixtures', 'sample-yaml-dir', 'yaml'),
      removeTocItems.globPatterns
    );

    assert.deepStrictEqual(actual, ['toc.yml']);
  });

  describe('normal packages', () => {
    it('removes interfaces', async () => {
      const obj = {
        items: [
          {uid: '@google-cloud/iam!google.type.IExpr:interface'},
          {uid: '@google-cloud/bigquery!BigQuery:class'},
        ],
      };

      await removeTocItems.process({metadata: {}, obj});

      assert.deepStrictEqual(obj.items, [
        {uid: '@google-cloud/bigquery!BigQuery:class'},
      ]);
    });

    it('removes items that come from protos', async () => {
      const obj = {
        items: [
          {uid: '@google-cloud/iam!protos.google.type.Expr:class'},
          {uid: '@google-cloud/bigquery!BigQuery:class'},
        ],
      };

      await removeTocItems.process({metadata: {}, obj});

      assert.deepStrictEqual(obj.items, [
        {uid: '@google-cloud/bigquery!BigQuery:class'},
      ]);
    });

    it('removes items that come from @google-cloud/common', async () => {
      const obj = {
        items: [
          {uid: '@google-cloud/common!Service:class'},
          {uid: '@google-cloud/bigquery!BigQuery:class'},
        ],
      };

      await removeTocItems.process({metadata: {}, obj});

      assert.deepStrictEqual(obj.items, [
        {uid: '@google-cloud/bigquery!BigQuery:class'},
      ]);
    });

    it('removes items that come from google-auth-library', async () => {
      const obj = {
        items: [
          {uid: 'google-auth-library!JWT:class'},
          {uid: '@google-cloud/bigquery!BigQuery:class'},
        ],
      };

      await removeTocItems.process({metadata: {}, obj});

      assert.deepStrictEqual(obj.items, [
        {uid: '@google-cloud/bigquery!BigQuery:class'},
      ]);
    });
  });

  describe('shared packages', () => {
    it('removes interfaces', async () => {
      const obj = {
        items: [
          {uid: '@google-cloud/iam!google.type.IExpr:interface'},
          {uid: '@google-cloud/bigquery!BigQuery:class'},
        ],
      };

      await removeTocItems.process({metadata: {isSharedPackage: true}, obj});

      assert.deepStrictEqual(obj.items, [
        {uid: '@google-cloud/bigquery!BigQuery:class'},
      ]);
    });

    it('does not remove items that come from protos', async () => {
      const obj = {
        items: [
          {uid: '@google-cloud/iam!protos.google.type.Expr:class'},
          {uid: '@google-cloud/bigquery!BigQuery:class'},
        ],
      };

      await removeTocItems.process({metadata: {isSharedPackage: true}, obj});

      assert.deepStrictEqual(obj.items, [
        {uid: '@google-cloud/iam!protos.google.type.Expr:class'},
        {uid: '@google-cloud/bigquery!BigQuery:class'},
      ]);
    });

    it('does not remove items that come from @google-cloud/common', async () => {
      const obj = {
        items: [
          {uid: '@google-cloud/common!Service:class'},
          {uid: '@google-cloud/bigquery!BigQuery:class'},
        ],
      };

      await removeTocItems.process({metadata: {isSharedPackage: true}, obj});

      assert.deepStrictEqual(obj.items, [
        {uid: '@google-cloud/common!Service:class'},
        {uid: '@google-cloud/bigquery!BigQuery:class'},
      ]);
    });

    it('does not remove items that come from google-auth-library', async () => {
      const obj = {
        items: [
          {uid: 'google-auth-library!JWT:class'},
          {uid: '@google-cloud/bigquery!BigQuery:class'},
        ],
      };

      await removeTocItems.process({metadata: {isSharedPackage: true}, obj});

      assert.deepStrictEqual(obj.items, [
        {uid: 'google-auth-library!JWT:class'},
        {uid: '@google-cloud/bigquery!BigQuery:class'},
      ]);
    });
  });
});
