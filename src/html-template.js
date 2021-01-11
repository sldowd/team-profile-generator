
const userInput = require('../index')
const fs = require('fs');


//template literal hmtl

//because I couldnt figure out how to properly make the intern, engineer, and manager objects
// I only wrote the basic html for one card instead of all of them in the name of saving time.
//I will revisit this once I can get all of the object data I need in the array.
const generatePage = userInput =>  {
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
    </head>
    <body>
        <header class="text-center bg-info text-light">
            <h1>My Team</h1>
        </header>
        <section>
            <div class="card">
                <div class="card-header">
                    <h3>${userInput.employee.name}</h3>
                    <h4>${userInput.role}</h4>
                </div>
                <div class="card-body>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${userInput.empId}</li>
                        <li class="list-group-item">Email: <a href="mailto:${userInput.email}">${userInput.email}</a></li>
                        <li class="list-group-item">Github: <a href="https://www.github.com/${userInput.githubUsername}>${userInput.githubUsername}</li>
                    </ul>
                </div>
            </div>
        </section>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </body>
    </html>`
};

//fs write file to dist/
const writeFile = () => {
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
}
module.exports = writeFile;