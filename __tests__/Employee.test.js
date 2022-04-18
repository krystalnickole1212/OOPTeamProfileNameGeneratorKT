const { type } = require('os');
const Employee = require ('../lib/Employee');


test('creates a employee object', () =>{
    const employee = new Employee('Chris', 'id', 'chris@gmail.com');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));

test('test if we get name from getName() method', ()=> {
    const employee = new Employee('Chris', 'id', 'chris@gmail.com');

        expect(employee.getName()).toBe('Chris');
    });
    
test('test if we get id from getId() method', ()=> {
    const employee = new Employee('Chris', 'id', 'chris@gmail.com');

        expect(employee.getID()).toBe('123456');
    });
    
test('test if we get email from getEmail() method', ()=> {    
    const employee = new Employee('Chris', 'id', 'chris@gmail.com');

        expect(employee.getEmail()).toBe('chris@gmail.com');
    });
});