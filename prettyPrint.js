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
  let insideExampleBlock = false;
  const codeExampleFencing = '* ```';


  for await (let line of rl) {
    if (insideExampleBlock) {
      const openingTagOrEndComment = /^(\s*)\*( @|\/)/;
      const match = line.match(openingTagOrEndComment);
      if (match) {
        const whitespace = match[1];
        // console.log(whitespace + codeExampleFencing + '###');
        // console.log(line);
        data.push(whitespace + codeExampleFencing);
        insideExampleBlock = false;
      }
    }

    const includeTag = /^(\s*)\* @example <caption>include:/;
    let match = line.match(includeTag);
    if (match) {
      data.push(line); // skip include tags for now
      continue;
    }

    const exampleTag = /^(\s*)\* @example/;
    match = line.match(exampleTag);
    if (match) {
      insideExampleBlock = true;
      const whitespace = match[1];
      const captionTag = line.match(/<caption>/);
      if (captionTag) {
        const closingCaptionTag = line.match(/<\/caption>/);
        if (!closingCaptionTag) {
          throw new Error(`closing caption missing: ${line}`);
        }
        line = line.replace(/<\/?caption>/g, '');
      }
      data.push(line);
      data.push(whitespace + codeExampleFencing);
    } else {
      data.push(line);
    }
  }

  fs.writeFileSync(file, data.join('\n'), 'utf-8');
}

const main = async () => {
  const path = 'src/';
  const { readdir } = fs.promises;
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
