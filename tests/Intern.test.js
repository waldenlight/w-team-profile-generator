const { describe } = require('node:test');
const Intern = require('../lib/Intern');

describe('Intern', () => {
    // Check if employee can be instantiated
    describe('Instantiate', () => {
        it("Should be an instance of Intern", () => {
            const intern = new Intern();
            expect(intern).toBeInstanceOf(Intern);
        });
    });
    // Check if fields can be initialized
    describe('Initialize name', () => {
        it("Should set name properly", () => {
            const name = 'Ryan';
            const intern = new Intern(name);
            expect(intern.name).toBe(name);
        });
    });
    describe('Initialize id', () => {
        it('should set id properly', () => {
            const id = '0000';
            const intern = new Intern('Ryan', id);
            expect(intern.id).toBe(id);
        });
    });
    describe('Initialize email', () => {
        it('should set email properly', () => {
            const email = 'ryan@gmail.com';
            const intern = new Intern('Ryan', '0000', email);
            expect(intern.email).toBe(email);
        });
    });
    describe('Initialize school', () => {
        it('should set school properly', () => {
            const school = 'University of Atlantis';
            const intern = new Intern('Alex', '4321', "alex@gmail.com", school);
            expect(intern.school).toBe(school);
        });
    });
});