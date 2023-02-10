const Manager = require('../lib/manager');

describe('Manager', () => {
    describe('getOfficeNum', () => {
        it('should return the office number from the Manager object', () => {
            const newManager = new Manager('Maya', 123, 'maya@company.com', '170D');
            const officeNum = newManager.getOfficeNum();

            expect(officeNum).toEqual('170D');
        });
    });

    describe('getRole', () => {
        it('should override the parent object to return Manager', () => {
            const newManager = new Manager('Maya', 123, 'maya@company.com', '170D');
            const employeeRole = newManager.getRole();

            expect(employeeRole).toEqual('Manager');
        });
    })
})