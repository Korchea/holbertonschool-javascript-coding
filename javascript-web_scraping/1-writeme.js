#!/usr/bin/node

const process = require('process');

// Requiring fs module in which
// readFile function is defined.
const fs = require('fs');
// Reading data in utf-8 format
// which is a type of character set.
// Instead of 'utf-8' it can be
// other character set also like 'ascii'
fs.writeFile(process.argv[2], process.argv[3], 'utf-8', (err) => {
  if (err) {
    console.log(err);
    return;
  }
});
