const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, empId, email, officeNumber) {
        super(name, empId, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;