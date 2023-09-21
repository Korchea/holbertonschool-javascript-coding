#!/usr/bin/node

const request = require('request');
request.get(process.argv[2], function (error, response) {
  console.log('code:', response.statusCode);
});
