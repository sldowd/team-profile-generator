const Employee = require("./lib/Employee")
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const writeFile = require('./src/html-template');

const userInput = [];

function addManager() {
    inquirer
        .prompt([{
            type: 'input',
            name: 'officeNumber',
            message: 'Enter manager office number'
        }])
        .then(answers => {
            //I'm missing arguments in new Manager() below because
            //I can't figure out how to pull info from the employee prompts and
            //pass it into the constructor. The same goes for the addIntern() and addEngineer() functions.
            const manager = new Manager(answers.officeNumber);
            const officeNumber = manager.getOfficeNumber();
            addEmployee();
        })
}

function addEmployee() {
    inquirer
        .prompt([{
            type: 'input',
            name: 'name',
            message: 'Enter employee name',

        },
        {
            type: 'input',
            name: 'empId',
            message: 'Enter employee number',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter employee email address',
        }])
        .then(answers => {
            const employee = new Employee(answers.name, answers.empId, answers.email);
            const name = employee.getName();
            const id = employee.getId();
            const email = employee.getEmail();
            userInput.push(employee);
            nextStep();
        });
       
};
function nextStep() {
    inquirer
    .prompt([{
        type: 'list',
        name: 'engineerOrIntern',
        message: 'What would you like to do next?',
        choices: ['Add Engineer', 'Add Intern', 'Finish'],
    }])
    .then(answers => {
        switch(answers.engineerOrIntern) {
            case 'Add Engineer':
                addEngineer();
                break;
            case 'Add Intern':
                addIntern();
                break;
            case 'Finish':
                console.log(userInput);
                writeFile(userInput);
                break;
        }
    })
};

function addEngineer() {
    inquirer
        .prompt([{
            type: 'input',
            name: 'githubUsername',
            message: 'Please enter employee Github username',
        }])
        .then(answers => {
            
            const engineer = new Engineer(answers.githubUsername);
            const githubUsername = engineer.getGithubUsername();
            userInput.push(engineer);
            addEmployee();
        })
};

function addIntern() {
    inquirer
        .prompt([{
            type: 'input',
            name: 'school',
            message: 'Please enter intern school',
        }])
        .then(answers => {
            
            const intern = new Intern(answers.school);
            const school = intern.getSchoolName();
            userInput.push(intern);
            addEmployee();
        })
};

addManager();
module.exports = userInput;