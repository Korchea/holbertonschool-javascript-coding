#!/usr/bin/node

const request = require('request');
request(process.argv[2], function (error, response) {
  if (error) {
    console.error(error);
  } else {
    const JsonBody = JSON.parse(response.body);
    const comTask = {};
    let maxId = 0;
    for (const user of JsonBody) {
      comTask[user.userId] = 0;
      maxId = user.userId;
    }
    for (const user of JsonBody) {
      if (user.completed === true) {
        comTask[user.userId]++;
      }
    }
    for (let i = 0; i <= maxId; i++) {
      if (comTask[i] !== 0) {
        console.log(comTask);
        return;
      }
    }
    console.log({});
  }
});
