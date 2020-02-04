'use strict';

//node.1.2
let fs = require('fs');
let filename = 'userinfo.json';

//læs og print data i filen userinfo.json
fs.readFile(filename, (err, data) => {
    if (err) {
        throw err;
    }
    console.log(JSON.stringify(JSON.parse(data), null, 2)); //make the json readable
});
