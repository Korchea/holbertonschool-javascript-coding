#!/usr/bin/node

const request = require('request');
request(process.argv[2], function (error, response) {
  if (error) {
    console.error(error);
  } else {
    const JsonBody = JSON.parse(response.body).results;
    let numOfMovies = 0;
    for (const i in JsonBody) {
      for (const j in JsonBody[i].characters) {
        if (JsonBody[i].characters[j] === 'https://swapi-api.hbtn.io/api/people/18/') {
          numOfMovies++;
        }
      }
    }
    console.log(numOfMovies);
  }
});
