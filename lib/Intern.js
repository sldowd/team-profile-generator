const Employee = require('./Employee');

class Intern extends Employee {
    constructor(schoolName) {
        super();
        this.schoolName = schoolName;
    }
    getSchoolName() {
        return this.schoolName;
    }
}
module.exports = Intern;