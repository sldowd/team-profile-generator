class Engineer extends Employee {
    constructor() {
        this
        super();
    }
    getGithub() {
        inquirer
            .prompt({
                type: 'input',
                name: 'githubUsername',
                message: 'Enter employee github username'
            })
            .then()
    };
};
module.exports = Engineer;
