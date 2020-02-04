'use strict';

//node.1.1
const readline = require('readline-sync');
let id = readline.question("Enter User ID to look for: ");

let fs = require('fs');
let filename = 'userinfo.json';

fs.readFile(filename, (err, data) => {
    if (err) {
        throw err;
    }
    let arr = JSON.parse(data);
    for (let obj of arr) {
        if (obj.userId === id) {
            break;
        }
        console.log(`${id} has email: ${obj.email}`);
    }
});