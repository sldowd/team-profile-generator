const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('employee constructor creates new employee object', () => {
    const employee = new Employee('dave', '69', 'bro420@mail.com');

    expect(employee.name).toBe('dave');
    expect(employee.empId).toBe('69');
    expect(employee.email).toBe('bro420@mail.com');
})