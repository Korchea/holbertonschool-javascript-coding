#!/usr/bin/node

const request = require('request');
const dir = 'https://swapi-api.hbtn.io/api/films/';
const id = process.argv[2];
request(dir + id, function (error, response) {
  if (error) {
    console.error(error);
  } else {
    console.log(JSON.parse(response.body).title);
  }
});
