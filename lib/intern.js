//Import Parent Class
let Employee = require('./employee');

//Extended Class: Intern
class Intern extends Employee {

    constructor(name, id, email, school) {
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;

        this.school = school;
    }

    getSchool() {
        console.log(this.school);
    }

    getRole() {
        console.log(Intern);
    }
}

//Export Extended Class
module.exports = Intern;