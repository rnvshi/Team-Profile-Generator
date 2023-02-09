//Import Parent Class
let Employee = require('./employee');

//Extended Class: Engineer
class Engineer extends Employee {

    constructor(name, id, email, github) {
        super(name, id, email);

        this.role = 'Engineer';

        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return this.role;
    }
}

//Export Extended Class
module.exports = Engineer;