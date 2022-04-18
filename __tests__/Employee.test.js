const { type } = require('os');
const Employee = require ('/lib/Employee');


test('creates a employee object', () =>{
    const employee = new Employee('Dave', 'id', 'dave@gmail.com');

test('test if we get name from getName() method', ()=> {
        expect(employee.getName()).toBe('Chris');
    });
    
test('test if we get id from getId() method', ()=> {
        expect(employee.getID()).toBe('123456');
    });
    
test('test if we get email from getEmail() method', ()=> {
        expect(employee.getEmail()).toBe('chris@gmail.com');
    });
});