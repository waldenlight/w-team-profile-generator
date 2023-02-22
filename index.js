// Packages
const inquirer = require('inquirer');
const fs = require('fs');
// Classes
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
            // Create HTML
            const main = document.querySelector('<main>');
            const employeeCard = document.createElement('div').setAttribute('class', 'employee');
            const cardHeader = document.createElement('div').setAttribute('class', 'card-header');
            const name = document.createElement('h2').setAttribute('class', 'name');
            const occupation = document.createElement('h2').setAttribute('class', 'occupation');
            const cardInfo = document.createElement('div').setAttribute('class', 'info');
            const id = document.createElement('p').setAttribute('class', 'id');
            const email = document.createElement('p').setAttribute('class', 'email');
            const other = document.createElement('p').setAttribute('class', 'other');
            // Change content within HTML
            name.textContent = `manager.name`;
            occupation.textContent = `Manager`;
            id.textContent = `manager.id`;
            email.textContent = `manager.email`;
            office.textContent = `manager.office`;
            // Organize HTML
            cardHeader.appendChild(name);
            cardHeader.appendChild(occupation);
            cardInfo.appendChild(id);
            cardInfo.appendChild(email);
            cardInfo.appendChild(other);
            employeeCard.appendChild(cardHeader);
            employeeCard.appendChild(cardInfo);
            // Append HTML to main
            main.appendChild(employeeCard);
            // Reinitiates prompt loop
            addEmployee();
        })
}

managerPrompts();

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

            // Reinitiates prompt loop
            addEmployee();
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

            // Reinitiates prompt loop
            addEmployee();
        })
}

const addEmployee = function () {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Would you like to add another employee?',
                name: 'add',
                choices: ['Yes', 'No'],
            },
        ])
        .then((data) => {
            if (data.add == 'Yes') {
                initialPrompts();
            } else {
                console.log("Data has been logged")
            }
        })
}