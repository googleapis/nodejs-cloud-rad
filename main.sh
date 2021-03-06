#!/bin/bash

# Copyright 2021 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

set -eo pipefail

if [[ -z "$CREDENTIALS" ]]; then
  # if CREDENTIALS are explicitly set, assume we're testing locally
  # and don't set NPM_CONFIG_PREFIX.
  export NPM_CONFIG_PREFIX=${HOME}/.npm-global
  export PATH="$PATH:${NPM_CONFIG_PREFIX}/bin"
  cd $(dirname $0)/../..
fi

if [ -n $VERSION ]
then
  echo "Checking out $VERSION."
  git diff
  git checkout $VERSION
fi


npm i json@9.0.6 -g
# remove @google-cloud/ from package name
name=$(cat package.json | json name | sed 's/^.*\///')

# Generate the data for the devsite tarball
dir="$(cd "$(dirname "$0")"; pwd)"
if [ "$name" == "common" ]; then
  . "$dir/../@google-cloud/cloud-rad/generate-devsite-base-classes.sh"
elif [ "$name" == "google-auth-library" ]; then
  . "$dir/../@google-cloud/cloud-rad/generate-devsite-base-classes.sh"
else 
  . "$dir/../@google-cloud/cloud-rad/generate-devsite.sh"
fi

# create docs.metadata, based on package.json and .repo-metadata.json.
pip install -U pip
python3 -m pip install --user gcp-docuploader
python3 -m docuploader create-metadata \
  --name=$name \
  --version=$(cat package.json | json version) \
  --language=$(cat .repo-metadata.json | json language) \
  --distribution-name=$(cat .repo-metadata.json | json distribution_name) \
  --product-page=$(cat .repo-metadata.json | json product_documentation) \
  --github-repository=$(cat .repo-metadata.json | json repo) \
  --issue-tracker=$(cat .repo-metadata.json | json issue_tracker)
cp docs.metadata ./_devsite/docs.metadata

# deploy the docs.
if [[ -z "$CREDENTIALS" ]]; then
  CREDENTIALS=${KOKORO_KEYSTORE_DIR}/73713_docuploader_service_account
fi
if [[ -z "$BUCKET" ]]; then
  BUCKET=docs-staging-v2
fi

python3 -m docuploader upload ./_devsite --destination-prefix docfx --credentials $CREDENTIALS --staging-bucket $BUCKET
