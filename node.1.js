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

let arr = []; 
arr.push(obj); //push object into array
let json = JSON.stringify(arr, null, 2); //making the json readable

fs.writeFile(filename, json, (err) => {
    if(err) {
        throw err;
    }
    console.log('Data added to the json file userinfo');
});
