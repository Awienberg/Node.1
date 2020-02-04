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

let arr;
