//Parent Class: Employee
class Employee {

    //Constructor
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //Methods
    getName() {
        console.log(this.name);
    }

    getId() {
        console.log(this.id);
    }

    getEmail() {
        console.log(this.email);
    }

    getRole() {
        console.log(Employee);
    }
}

//Export Parent Class
module.exports = Employee;