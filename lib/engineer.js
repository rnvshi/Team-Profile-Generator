//Import Parent Class
let Employee = require('./employee');

//Extended Class: Engineer
class Engineer extends Employee {

    constructor(name, id, email, github) {
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;

        this.github = github;
    }

    getGithub() {
        console.log(this.github);
    }

    getRole() {
        console.log(Engineer);
    }
}

//Export Extended Class
module.exports = Engineer;