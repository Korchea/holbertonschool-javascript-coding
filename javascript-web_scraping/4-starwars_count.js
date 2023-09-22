#!/usr/bin/node

const request = require('request');
request(process.argv[2], function (error, response) {
  if (error) {
    console.error(error);
  } else {
    const JsonBody = JSON.parse(response.body).results;
    let numOfMovies = 0;
    for (const i of JsonBody) {
      for (const j of i.characters) {
        if (j.includes("18")) {
          numOfMovies++;
        }
      }
    }
    console.log(numOfMovies);
  }
});
