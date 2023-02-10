const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    describe('getRole', () => {
        it('should override the parent constructor function to return Engineer', () => {
            const newEngineer = new Engineer('Maria', 123, 'maria@company.com', 'mariagit23');
            const employeeRole = newEngineer.getRole();

            expect(employeeRole).toEqual('Engineer');
        });
    });

    describe('getGithub', () => {
        it('should return the GitHub username from the object', () => {
            const newEngineer = new Engineer('Maria', 123, 'maria@company.com', 'mariagit23');
            const employeeGit = newEngineer.getGithub();

            expect(employeeGit).toEqual('mariagit23');
        })
    })
})