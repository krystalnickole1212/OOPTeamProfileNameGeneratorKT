//destructure inside object created in index
const inquirer = require('inquirer');
const {Employee, Engineer, Inter, Manger} = require("./lib")
console.log(Employee)
const team = [];




//create index and import 
const Employee = require('./employee.js')
const Engineer = require('./engineer.js')
const Intern = require('./intern.js')
const Manager = require('./manager.js')


//export 
module.exports ={Employee, Engineer, Intern, Manager}

//functions to create teams
inquirer.prompt[{
    {
        type: 'input',
        name: 'managerName',
        message: "What is the manager's name?"
    }
    {
        type: 'input',
        name: 'managerId',
        message: "What is the manager's Id?"
    }
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is the manager's email?"
    }
    {
        type: 'input',
        name: 'managerOfficeNumber',
        message: "What is the manager's office number?"
    }
}].then(data =>{
    const newManager = new Manager(data.managerName);
    team.push(newManager)
    console.log(team, newManager)
    inquirer.prompt([
        {type:'list', 
        name : 'choice to add more employees',
,       message: 'Which team member would you like to add?',
        choices: ['Engineer', 'Intern', 'None']}
    ]).then(data=>{
        if (data.choice=== "Engineer"){
            createEngineer()
        }
    })
})
function createEngineer(){
    inquirer.prompt([
        {type: 'input', 
        name: 'engineerName'.
        message:'What is your name?'
        }
    ])
}.then{engineerData =>{
    console.log(data)

}}