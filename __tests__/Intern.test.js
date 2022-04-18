const test = require('jest');
const Intern = require('../lib.Intern');
const intern = new Intern('Chris', '123456', 'chris@gmail.com', '394','Texas');

test('test if we get constructor values for engineer object', ()=> {
    expect(intern.name).toBe('Chris');
    expect(intern.id).toBe('123456');
    expect(intern.email).toBe('chris@gmail.com');
    expect(intern.school).toBe('Texas');
});


test('test if we get name from getName() method', ()=> {
    expect(intern.getName()).toBe('Chris');
});

test('test if we get id from getId() method', ()=> {
    expect(intern.getID()).toBe('123456');
});

test('test if we get email from getEmail() method', ()=> {
    expect(intern.getEmail()).toBe('chris@gmail.com');
});

test('test if we get officeNumber from getOfficeNumber() method', ()=> {
    expect(intern.getOfficeNumber()).toBe('394');
});

test('test if we get role from getSchool() method', ()=> {
    expect(intern.getSchool()).toBe('Texas');
});

test('test if we get role from getRole() method', ()=> {
    expect(intern.getRole()).toBe('Intern');
});