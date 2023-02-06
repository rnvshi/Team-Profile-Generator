const inquirer = require("inquirer");

const questions = [
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
        type: 'list',
        name: 'role',
        choices: [Engineer, Intern, Finish],
        message: 'Select an additional team memer to add, or finish building your team:'

    }
]

function init() {
    inquirer.prompt(questions)
        .then((data) => {
            console.log(data);
        })
};

init();