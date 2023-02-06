//Import Parent Class
let employee = require('./employee');

//Extended Class: Engineer
class Engineer extends Employee {

    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        super(name, id, email);

        this.github = github;
    }

    getGithub() {
        console.log(this.github);
    }

    getRole() {
        console.log(Engineer);
    }
}