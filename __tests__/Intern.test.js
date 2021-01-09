const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('Intern creates new intern with school name', () => {
    const intern = new Intern('UPenn');

    expect(intern.schoolName).toBe('UPenn');
});