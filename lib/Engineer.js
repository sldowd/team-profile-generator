const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(githubUsername) {
        super();
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
