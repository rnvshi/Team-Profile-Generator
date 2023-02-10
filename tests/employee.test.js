const Employee = require('../lib/employee');

describe('Employee', () => {
    it('should create an object with a name, ID, and email', () => {
        const newEmployee = new Employee('Isha', 123, 'ishaarahman@gmail.com');

        expect(newEmployee.name).toEqual('Isha');
        expect(newEmployee.id).toEqual(123);
        expect(newEmployee.email).toEqual('ishaarahman@gmail.com');
    });

    describe('getName', () => {
        it('should return the object name when called', () => {
            const newEmployee = new Employee('Isha', 123, 'ishaarahman@gmail.com');
            const employeeName = newEmployee.getName();

            expect(employeeName).toEqual('Isha');

        });
    });

    describe('getId', () => {
        it('should return the object ID when called', () => {
            const newEmployee = new Employee('Isha', 123, 'ishaarahman@gmail.com');
            const employeeID = newEmployee.getId();

            expect(employeeID).toEqual(123);

        });
    });

    describe('getName', () => {
        it('should return the object email when called', () => {
            const newEmployee = new Employee('Isha', 123, 'ishaarahman@gmail.com');
            const employeeEmail = newEmployee.getEmail();

            expect(employeeEmail).toEqual('ishaarahman@gmail.com');

        });
    });

    describe('getRole', () => {
        it('should return the object role Employee when called', () => {
            const newEmployee = new Employee('Isha', 123, 'ishaarahman@gmail.com');
            const employeeRole = newEmployee.getRole();

            expect(employeeRole).toEqual('Employee');
        })
    })
});
