const { describe } = require('node:test');
const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    // Check if employee can be instantiated
    describe('Instantiate', () => {
        it("Should be an instance of Engineer", () => {
            const engineer = new Engineer();
            expect(engineer).toBeInstanceOf(Engineer);
        });
    });
    // Check if fields can be initialized
    describe('Initialize name', () => {
        it("Should set name properly", () => {
            const name = 'Alex';
            const engineer = new Engineer(name);
            expect(engineer.name).toBe(name);
        });
    });
    describe('Initialize id', () => {
        it('should set id properly', () => {
            const id = '4321';
            const engineer = new Engineer('Alex', id);
            expect(engineer.id).toBe(id);
        });
    });
    describe('Initialize email', () => {
        it('should set email properly', () => {
            const email = 'alex@gmail.com';
            const engineer = new Engineer('Alex', '4321', email);
            expect(engineer.email).toBe(email);
        });
    });
    describe('Initialize github', () => {
        it('should set github properly', () => {
            const github = 'alexcode';
            const engineer = new Engineer('Alex', '4321', "alex@gmail.com", github);
            expect(engineer.github).toBe(github);
        });
    });
});