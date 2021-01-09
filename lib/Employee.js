

class Employee {
    constructor(name, empId, email) {
    
        this.name = name;
        this.empId = empId;
        this.email = email;
    }

        getName() {
            return this.name;
        };
        getId() {
            return this.empId
        };
        getEmail() {
            return this.email
        };
        getRole() {
            const role = 'Employee';
            return role;
        }
}
module.exports = Employee;