'use strict';

//node.1.1
const readline = require('readline-sync');
let userId = readline.question("Enter User ID: ");
let email = readline.question("Enter Email: ");
console.log(`Your User ID: ${userId}, and your email: ${email}`);

let fs = require('fs');
let filename = 'userinfo.json';

let obj = {
    UserId: `${userId}`, 
    email: `${email}`
};

let users = []; 
users.push(obj); //push object into array
 
let json = JSON.stringify(users, null, 2); //making the json readable

fs.appendFile(filename, json , (err) => {
    if(err) {
        throw err;
    }
    console.log('Data added to the json file userinfo');
});

//læs og print data i filen userinfo.json
fs.readFile(filename, (err, data) => {
    if (err) {
        throw err;
    }
    console.log("Content:\n--------\n" + data);
});
