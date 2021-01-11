//require index.js
//const index = require('../index')
const fs = require('fs');


//template literal hmtl
constant generatePage = userInput =>  {
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        
    </body>
    </html>`
};

//fs write file to dist/
fs.writeFile('./dist/index.html', generatePage(userInput), err => {
    //if  theres an error, reject promis and send the error to the promises .catch() method
    if (err) {
        reject(err);
        return;
    }
    //if no error, resolve and send to .then() method
    resolve({
        ok: true,
        message: 'File created!'
    });
});