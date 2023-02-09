//Import Parent Class
let Employee = require('./employee');

//Extended Class: Intern
class Intern extends Employee {

    constructor(name, id, email, school) {
        super(name, id, email);

        this.role = 'Intern';

        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return this.role;
    }
}

//Export Extended Class
module.exports = Intern;