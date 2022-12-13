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
  const COMMON = /^(\s*)- name: common$/;
  const AUTH = /^(\s*)- name: google-auth-library$/;
  let insideDeleteBlock = false;
  let whitespace = '';

  for await (const line of rl) {
    if(insideDeleteBlock) {
      let re = new RegExp(`^${whitespace}- name:`);
      const match = line.match(re);
      if(match) {
        insideDeleteBlock = false;
      } else {
        continue; // do not write the line inside a delete block
      }
    }
    let match = line.match(COMMON);
    if (match) {
      whitespace = match[1];
      insideDeleteBlock = true;
      continue;
    }
    match = line.match(AUTH);
    if (match) {
      whitespace = match[1];
      insideDeleteBlock = true;
      continue;
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
