const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const initialPrompts = function () {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Occupation:',
                name: 'occupation',
                choices: ['Manager', 'Engineer', 'Intern'],
            }
        ])
        .then((data) => {
            if (data.occupation == 'Manager') {
                managerPrompts();
            } else if (data.occupation == 'Engineer') {
                engineerPrompts();
            } else {
                internPrompts();
            }
        })
}

initialPrompts();

const managerPrompts = function () {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Manager name:',
            },
            {
                type: 'input',
                name: 'id',
                message: 'Employee ID:',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Email:',
            },
            {
                type: 'input',
                name: 'office',
                message: 'Office #:',
            }
        ])
        .then((data) => {
            const manager = new Manager(data.name, data.id, data.email, data.office);
        })
}

const engineerPrompts = function () {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Employee name:',
            },
            {
                type: 'input',
                name: 'id',
                message: 'Employee ID:',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Email:',
            },
            {
                type: 'input',
                name: 'github',
                message: 'Github:',
            }
        ])
        .then((data) => {
            const engineer = new Engineer(data.name, data.id, data.email, data.github);
        })
}

const internPrompts = function () {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Intern name:',
            },
            {
                type: 'input',
                name: 'id',
                message: 'Employee ID:',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Email:',
            },
            {
                type: 'input',
                name: 'school',
                message: 'School:',
            }
        ])
        .then((data) => {
            const intern = new Intern(data.name, data.id, data.email, data.school);
        })
}