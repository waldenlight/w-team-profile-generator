const { describe } = require('node:test');
const Employee = require('../lib/Employee');

describe('Employee', () => {
    // Check if employee can be instantiated
    describe('Instantiate', () => {
        it("Should be an instance of Employee", () => {
            const employee = new Employee();
            expect(employee).toBeInstanceOf(Employee);
        });
    });
    // Check if fields can be initialized
    describe('Initialize name', () => {
        it("Should set name properly", () => {
            const name = 'Paul';
            const employee = new Employee(name);
            expect(employee.name).toBe(name);
        });
    });
    describe('Initialize id', () => {
        it('should set id properly', () => {
            const id = '1234';
            const employee = new Employee('Paul', id);
            expect(employee.id).toBe(id);
        });
    });
    describe('Initialize email', () => {
        it('should set email properly', () => {
            const email = 'paul@gmail.com';
            const employee = new Employee('Paul', '1234', email);
            expect(employee.email).toBe(email);
        });
    });
});