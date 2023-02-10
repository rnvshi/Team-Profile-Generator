//Import required modules
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

//Empty array to hold team members
const teamMembers = [];

//CLI input for Manager
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
        name: 'officenum',
        messge: 'Enter manager office number:'
    }
]

//Function to add a new team member
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
                    console.log('Writing File...');
                    renderCard(teamMembers);
                    break;
            }
        })
}

//CLI input for a new Engineer
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

//CLI input for a new Intern
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

function renderCard(teamMembers) {

    let markup = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="initial-scale = 1.0">
        <title>Team Builder | edX Carleton Bootcamps</title>
        <link rel="stylesheet" href="./style.css">
    </head>
    
    <body>
        <header>
            <h1 id="top">Team Profile</h1>
        </header>
    
        <section class="content">
        `;

    for (i = 0; i < teamMembers.length; i++) {

        switch (teamMembers[i].role) {

            case 'Manager':

                markup += `
                <section class="card mgr-card">
                <h1>${teamMembers[i].getRole()}</h1>
                <p id="name">${teamMembers[i].getName()}</p>
                <p>ID: ${teamMembers[i].getId()}</p>
                <p>Email: <a href="mailto:${teamMembers[i].getEmail()}">${teamMembers[i].getEmail()}</a></p>
                <p>Office: ${teamMembers[i].getOfficeNum()}
                </section>
                `;

                break;

            case 'Engineer':

                markup += `
                <section class="card eng-card">
                <h1>${teamMembers[i].getRole()}</h1>
                <p id="name">${teamMembers[i].getName()}</p>
                <p>ID: ${teamMembers[i].getId()}</p>
                <p>Email: <a href="mailto: ${teamMembers[i].getEmail()}">${teamMembers[i].getEmail()}</a></p>
                <p>GitHub: <a href="https://github.com/${teamMembers[i].getGithub()}" target="_blank">${teamMembers[i].getGithub()}</a></p>
                </section>
                `
                break;

            case 'Intern':

                markup += `
                <section class="card int-card">
                <h1>${teamMembers[i].getRole()}</h1>
                <p id="name">${teamMembers[i].getName()}</p>
                <p>ID: ${teamMembers[i].getId()}</p>
                <p>Email: <a href="mailto: ${teamMembers[i].getEmail()}">${teamMembers[i].getEmail()}</a></p>
                <p>School: ${teamMembers[i].getSchool()}</p>
                </section>
                `
                break;

        }
    }

    markup += `
    </section>
    </body>
    
    </html>`

    fs.writeFile('./dist/index.html', markup, (err) =>
        err ? console.log(err) : console.log("File successfully written !"));

}

//Initilization function
function init() {
    inquirer.prompt(addManager)
        .then((data) => {
            const newManager = new Manager(data.name, data.id, data.email, data.officenum);
            teamMembers.push(newManager);
            addMember();
        })
};

//Call initialization function
init();