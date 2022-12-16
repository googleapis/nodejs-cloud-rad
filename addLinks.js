#!/usr/bin/env node

const fs = require('fs');
const readline = require('readline');

const glob = require('glob');
const { statSync } = require('fs');

async function processLineByLine(file) {
  const fileStream = fs.createReadStream(file);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  const data = [];
  const COMMON = /^(\s*)- uid: '@google-cloud\/common\![\~]?(.*):(interface|class|type)'/;
  const AUTH = /^(\s*)- uid: 'google-auth-library\![\~]?(.*):(interface|class|type)'/;
  const COMMON_URL = `https://cloud.google.com/nodejs/docs/reference/common/latest/common/`;
  const AUTH_URL = `https://cloud.google.com/nodejs/docs/reference/google-auth-library/latest/google-auth-library/`;

  for await (const line of rl) {
    data.push(line);
    let match = line.match(COMMON);
    if (match) {
      const whitespace = match[1];
      const interface = match[2];
      // console.log(interface);
      let url = COMMON_URL + interface.toLowerCase();
      //  - uid: '@google-cloud/common!ServiceOptions:interface'
      //    name: ServiceOptions
      //    href: https://cloud.google.com/nodejs/docs/reference/common/latest/common/serviceoptions
      //
      //  Add two whitespaces for `- ` before href
      data.push(`${whitespace}  href: ${url}`);
    }
    match = line.match(AUTH);
    if (match) {
      const whitespace = match[1];
      const interface = match[2];
      // console.log(interface);
      let url = AUTH_URL + interface.toLowerCase();
      // - uid: 'google-auth-library!GoogleAuthOptions:interface'
      //   href: https://cloud.google.com/nodejs/docs/reference/google-auth-library/latest/google-auth-library/googleauthoptions
      //   name: GoogleAuthOptions
      //
      //  Add two whitespaces for `- ` before href
      data.push(`${whitespace}  href: ${url}`);
    }
  }



  fs.writeFileSync(file, data.join('\n'), 'utf-8');
}

const main = async () => {
  const path = 'yaml/';
  try {
    const files = glob.sync(`${path}/**/*.yml`, {
      ignore: ['node_modules'],
    });
    for (const file of files) {
      const stat = statSync(file);
      if (!stat.isFile()) continue;
      processLineByLine(file);
    }
  } catch (err) {
    console.error(err);
  }
};

main();
