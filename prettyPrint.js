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
  let insideCodeBlock = false;
  const FENCING = /^(\s*)\* ```/;

  const OPENING_TAG = '* <pre class="prettyprint"><code>';
  const CLOSING_TAG = '* </pre></code>';

  for await (const line of rl) {
    const match = line.match(FENCING);
    if (match) {
      const whitespace = match[1];
      if (insideCodeBlock) {
        data.push(whitespace + CLOSING_TAG);
      } else {
        data.push(whitespace + OPENING_TAG);
      }
      insideCodeBlock = !insideCodeBlock;
    } else {
      data.push(line);
    }
  }

  fs.writeFileSync(file, data.join('\n'), 'utf-8');
}

const main = async () => {
  const path = 'build/';
  try {
    const files = glob.sync(`${path}/**/*.ts`, {
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
