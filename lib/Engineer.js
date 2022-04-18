const Employee = require('/Employee');

class Engineer extends Employee {
    constructor (name, id, email, github) {
        //call parent constructor 
        super(name, id, email);

        this.officeNumber = officeNumber;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }

    module.exports = Engineer;
