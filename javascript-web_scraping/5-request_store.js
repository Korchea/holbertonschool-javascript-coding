#!/usr/bin/node

const request = require('request');
const fs = require('fs');
request(process.argv[2], function (error, response, data) {
  if (error) {
    console.error(error);
  } else {
    fs.writeFile(process.argv[3], data, 'utf-8', (err) => {
      if (err) {
        console.error(err);
      }
    });
  }
});
