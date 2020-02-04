'use strict';

//node.1.1
const readline = require('readline-sync');
let userId = readline.question("Enter User ID: ");
let email = readline.question("Enter Email: ");

let fs = require('fs');
let filename = 'userinfo.json';

let obj = {
    'UserId': userId, 
    'email': email
};

let arr;                                                // define array
fs.readFile(filename, (err, data) => {
    if (err) {
        throw err;
    }
    arr = JSON.parse(data);                             // read to array
    let found = false;
    for (let arrobj of arr) {
        if (arrobj.userId === obj.userId) {             // check if exists
            found = true;
            break;
        }
    }
    if (found) {                                        // exists
        console.log(`${obj.userId} already recorded`);
    } else {                                            // new
        arr.push(obj);                                  // push obj onto array
        let json = JSON.stringify(arr, null, 2);              // stringify

        fs.writeFile(filename, json, (err) => { // write to json file
            if (err) {                                  // rewrite, not update
                throw err;
            }
        });
    }
});