const { describe } = require('node:test');
const Manager = require('../lib/Manager');

describe('Manager', () => {
    // Check if employee can be instantiated
    describe('Instantiate', () => {
        it("Should be an instance of Manager", () => {
            const manager = new Manager();
            expect(manager).toBeInstanceOf(Manager);
        });
    });
    // Check if fields can be initialized
    describe('Initialize name', () => {
        it("Should set name properly", () => {
            const name = 'Bob';
            const manager = new Manager(name);
            expect(manager.name).toBe(name);
        });
    });
    describe('Initialize id', () => {
        it('should set id properly', () => {
            const id = '5555';
            const manager = new Manager('Bob', id);
            expect(manager.id).toBe(id);
        });
    });
    describe('Initialize email', () => {
        it('should set email properly', () => {
            const email = 'bob@gmail.com';
            const manager = new Manager('bob', '5555', email);
            expect(manager.email).toBe(email);
        });
    });
    describe('Initialize school', () => {
        it('should set officeNum properly', () => {
            const officeNum = '108';
            const manager = new Manager('Alex', '4321', "alex@gmail.com", officeNum);
            expect(manager.officeNum).toBe(officeNum);
        });
    });
});