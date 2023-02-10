//Import Parent Class
let Employee = require('./employee');

//Extended Class: Manager
class Manager extends Employee {

    constructor(name, id, email, officenum) {
        super(name, id, email);

        this.role = 'Manager';

        this.officenum = officenum;
    }

    getOfficeNum() {
        return this.officenum;
    }

    getRole() {
        return this.role;
    }
}

//Export Extended Class
module.exports = Manager;