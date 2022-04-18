const test = require('jest');
const engineer = require('../lib.engineer');
const engineer = new engineer('Chris', '123456', 'chris@gmail.com', '394','github.com/chris');

test('test if we get constructor values for engineer object', ()=> {
    expect(engineer.name).toBe('Chris');
    expect(engineer.id).toBe('123456');
    expect(engineer.email).toBe('chris@gmail.com');
    expect(engineer.school).toBe('Texas');
});


test('test if we get name from getName() method', ()=> {
    expect(engineer.getName()).toBe('Chris');
});

test('test if we get id from getId() method', ()=> {
    expect(engineer.getID()).toBe('123456');
});

test('test if we get email from getEmail() method', ()=> {
    expect(engineer.getEmail()).toBe('chris@gmail.com');
});

test('test if we get officeNumber from getOfficeNumber() method', ()=> {
    expect(engineer.getOfficeNumber()).toBe('394');
});

test('test if we get github from getGithub() method', ()=> {
    expect(engineer.getGithub()).toBe('github.com/chris');
});

test('test if we get role from getRole() method', ()=> {
    expect(engineer.getRole()).toBe('Engineer');
});