const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, empId, email, schoolName) {
        super(name, empId, email);
        this.schoolName = schoolName;
    }
    getSchoolName() {
        return this.schoolName;
    }
}
module.exports = Intern;