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
            //this will throw an error because employee is not defined--I can't figure out how to collect the input
            //from the employee prompt and pass it into the subclasses when creating new manager, intern, or engineer objects
            const manager = new Manager(employee.name, employee.empId, employee. email, answers.officeNumber);
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
            //see note in addManager()
            const engineer = new Engineer(employee.name, employee.empId, employee.email, answers.githubUsername);
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
            //see note in addManager()
            const intern = new Intern(employee.name, employee.empId, employee.email, answers.school);
            const school = intern.getSchoolName();
            userInput.push(intern);
            addEmployee();
        })
};

addManager();
module.exports = userInput;