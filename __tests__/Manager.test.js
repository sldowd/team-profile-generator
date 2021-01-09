const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('Manager creates new manager object with officeNumber', () => {
    const manager = new Manager(5);

    expect(manager.officeNumber).toEqual(expect.any(Number));
})