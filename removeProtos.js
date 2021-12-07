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
  const PROTOS = /protos\.google/;

  // - name: Action
  // uid: '@google-cloud/spanner!protos.google.iam.v1.BindingDelta.Action:enum'
  //
  // or
  //
  // - name: CompressionCodec
  // uid: >-
  // @google-cloud/bigquery-storage!protos.google.cloud...CompressionCodec:enum
  for await (const line of rl) {
    let match = line.match(PROTOS);
    if (match) {
      // Handle triple entries
      if (line.match(/^\s*@google-cloud/)) {
        let uidStart = data.pop();
        if (uidStart.trim() === 'uid: >-') {
          throw new Error('invalid triple entry');
        }
      }
      data.pop(); // delete previous line
      continue; // skip current line
    }
    data.push(line);
  }

  fs.writeFileSync(file, data.join('\n'), 'utf-8');
}

const main = async () => {
  const path = 'yaml/';
  try {
    const files = glob.sync(`${path}/toc.yml`, {
      ignore: ['node_modules'],
    });
    for (const file of files) {
      const stat = statSync(file);
      if (!stat.isFile()) continue;
      console.log("removing extra entries from " + file);
      processLineByLine(file);
    }
  } catch (err) {
    console.error(err);
  }
};

main();
