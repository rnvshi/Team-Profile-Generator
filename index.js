//Import required modules
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

//Empty array to hold team members
const teamMembers = [];

const addManager = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter manager name:'
    }, {
        type: 'input',
        name: 'id',
        message: 'Enter manager ID:'
    }, {
        type: 'input',
        name: 'email',
        message: 'Enter manager email:'
    }, {
        type: 'input',
        name: 'github',
        message: 'Enter manager GitHub username:'
    }
]

function init() {
    inquirer.prompt(addManager)
        .then((data) => {
            const newManager = new Manager(data.name, data.id, data.email, data.github);
            teamMembers.push(newManager);
            addMember();
        })
};

function addMember() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'role',
                choices: ['Engineer', 'Intern', 'Finish'],
                message: 'Select an additional team memer to add, or finish building your team:'
            }
        ])
        .then((data) => {

            switch (data.role) {
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;
                case 'Finish':
                    console.log(teamMembers);
                    console.log('Writing File...');
                    break;
            }
        })
}

function addEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Enter engineer name:'
            }, {
                type: 'input',
                name: 'id',
                message: 'Enter engineer ID:'
            }, {
                type: 'input',
                name: 'email',
                message: 'Enter engineer email:'
            }, {
                type: 'input',
                name: 'github',
                message: 'Enter engineer GitHub username:'
            }
        ])
        .then((data) => {
            const newEngineer = new Engineer(data.name, data.id, data.email, data.github);
            teamMembers.push(newEngineer);
            addMember();
        })
}

function addIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Enter intern name:'
            }, {
                type: 'input',
                name: 'id',
                message: 'Enter intern ID:'
            }, {
                type: 'input',
                name: 'email',
                message: 'Enter intern email:'
            }, {
                type: 'input',
                name: 'school',
                message: 'Enter intern institution:'
            }
        ])
        .then((data) => {
            const newIntern = new Intern(data.name, data.id, data.email, data.school);
            teamMembers.push(newIntern);
            addMember();
        })
}

init();

module.exports = teamMembers;