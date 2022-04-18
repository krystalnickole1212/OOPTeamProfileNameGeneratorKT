const Manager = require('./lib/Manager.js');
const manager = new Manager('Chris', '123456', 'chris@gmail.com', '394');

test('test if we can get constructor values for manager object', ()=>{
    expect(manager.name).toBe('Chris');
    expect(manager.id).toBe('123456');
    expect(manager.email).toBe('chris@gmail.com');
    expect(manager.officeNumber).toBe('394');
});

test('test if we get name from getName() method', ()=> {
    expect(manager.getName()).toBe('Chris');
});

test('test if we get id from getId() method', ()=> {
    expect(manager.getID()).toBe('123456');
});

test('test if we get email from getEmail() method', ()=> {
    expect(manager.getEmail()).toBe('chris@gmail.com');
});

test('test if we get officeNumber from getOfficeNumber() method', ()=> {
    expect(manager.getOfficeNumber()).toBe('394');
});

test('test if we get role from getRole() method', ()=> {
    expect(manager.getRole()).toBe('Manager');
});