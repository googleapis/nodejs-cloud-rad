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
  const COMMON = /^(\s)*- uid: '@google-cloud\/common\!(.*):interface'/;
  const URL = `https://cloud.google.com/nodejs/docs/reference/common/latest/common/`;

  for await (const line of rl) {
    data.push(line);
    const match = line.match(COMMON);
    if (match) {
      const whitespace = match[1];
      const interface = match[2];
      console.log(interface);
      let url = URL + interface.toLowerCase();
      //  - uid: '@google-cloud/common!ServiceOptions:interface'
      //    name: ServiceOptions
      //    href: https://cloud.google.com/nodejs/docs/reference/common/latest/common/serviceoptions
      //
      //  Add three whitespaces for `- ` before href
      data.push(`${whitespace}   href: ${url}`);
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
