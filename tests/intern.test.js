let Intern = require('../lib/intern');

describe('Intern', () => {
    describe('getSchool', () => {
        it('should return the employee school from the object', () => {
            const newIntern = new Intern('Tati', 123, 'tati@company.com', 'Carleton University');
            const employeeInst = newIntern.getSchool();

            expect(employeeInst).toEqual('Carleton University');
        });
    });

    describe('getRole', () => {
        it('should override the employee object response to return Intern', () => {
            const newIntern = new Intern('Tati', 123, 'tati@company.com', 'Carleton University');
            const employeeRole = newIntern.getRole();

            expect(employeeRole).toEqual('Intern');
        })
    })
})