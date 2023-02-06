//Import Parent Class
let employee = require('./employee');

//Extended Class: Intern
class Manager extends Employee {

    constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        super(name, id, email);

        this.school = school;
    }

    getSchool() {
        console.log(this.school);
    }

    getRole() {
        console.log(Intern);
    }
}