const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name, empId, email, githubUsername) {
        super(name, empId, email);
        this.githubUsername = githubUsername;
    }
    getGithubUsername() {
        return this.githubUsername
    };
    getRole() {
        const role = 'Engineer';
        return role
    }
};
module.exports = Engineer;
