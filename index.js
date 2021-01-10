const Employee = require("./lib/Employee")
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');

function addManager() {
    inquirer
        .prompt([{
            type: 'input',
            name: 'managerName',
            message: 'Enter manager name'
        }])
        .then(answers => {
            const manager = new Manager(answers.managerName);
            const managerName = manager.getName();
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
            case 'Fnish':
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
            nextStep();
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
            nextStep();
        })
};


addManager();
module.exports = index;