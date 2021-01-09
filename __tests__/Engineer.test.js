const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');

test('engineer constructor creates new engineer object', () => {
    const engineer = new Engineer('username');

    expect(engineer.githubUsername).toEqual(expect.any(String));
})