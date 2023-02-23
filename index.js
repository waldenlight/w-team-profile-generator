// Packages
const inquirer = require('inquirer');
const fs = require('fs');
// Classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const employeeArray = [];

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
            employeeArray.push(manager);
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
            employeeArray.push(engineer);
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
            employeeArray.push(intern);
            console.log(intern.school)
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
                // Change emails to be links
                for (let i = 0; i < employeeArray.length; i++) {
                    employeeArray[i].email = `<a href='mailto:${employeeArray[i].email}'>` + employeeArray[i].email + "</a>";
                }
                const manager = employeeArray[0];
                const employeeOne = employeeArray[1];
                // Determine whether another manager, engineer, or intern for employeeOne
                let employeeOneOther = "Not Provided";
                if (employeeOne.officeNum) {
                    employeeOneOther = "Office: " + employeeOne.officeNum;
                } else if (employeeOne.github) {
                    employeeOneOther = `GitHub: <a href='https://www.github.com/${employeeOne.github}'>` + employeeOne.github + "</a>";
                } else {
                    employeeOneOther = "School: " + employeeOne.school;
                }
                const employeeTwo = employeeArray[2];
                // Determine whether another manager, engineer, or intern for employeeTwo
                let employeeTwoOther = "Not Provided";
                if (employeeTwo.officeNum) {
                    employeeTwoOther = "Office: " + employeeTwo.officeNum;
                } else if (employeeTwo.github) {
                    employeeTwoOther = `GitHub: <a href='https://www.github.com/${employeeTwo.github}'>` + employeeTwo.github + "</a>";
                } else {
                    employeeTwoOther = "School: " + employeeTwo.school;
                }
                const employeeThree = employeeArray[3];
                // Determine whether another manager, engineer, or intern for employeeThree
                let employeeThreeOther = "Not Provided";
                if (employeeThree.officeNum) {
                    employeeThreeOther = "Office: " + employeeThree.officeNum;
                } else if (employeeThree.github) {
                    employeeThreeOther = `GitHub: <a href='https://www.github.com/${employeeThree.github}'>` + employeeThree.github + "</a>";
                } else {
                    employeeThreeOther = "School: " + employeeThree.school;
                }
                const newFile = `<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><meta http-equiv='X-UA-Compatible' content='IE=edge'><meta name='viewport' content='width=device-width, initial-scale=1.0'><title>Team Profile</title><!-- Reset --><link rel='stylesheet' href='./reset.css'><!-- Styles --><link rel='stylesheet' href='./output.css'></head><body><nav><h1>My Team</h1></nav><main>` +
                    `<div class='employee'><div class='card-header'><h2 class='name'>${manager.name}</h2><h3 class='occupation'>Manager</h3></div><div class='info'><p class='id'>Employee ID: ${manager.id}</p><p class='email'>Email: ${manager.email}</p><p class='other'>Office: ${manager.officeNum}</p></div></div>` +
                    `<div class='employee'><div class='card-header'><h2 class='name'>${employeeOne.name}</h2><h3 class='occupation'>Manager</h3></div><div class='info'><p class='id'>Employee ID: ${employeeOne.id}</p><p class='email'>Email: ${employeeOne.email}</p><p class='other'>${employeeOneOther}</p></div></div>` +
                    `<div class='employee'><div class='card-header'><h2 class='name'>${employeeTwo.name}</h2><h3 class='occupation'>Manager</h3></div><div class='info'><p class='id'>Employee ID: ${employeeTwo.id}</p><p class='email'>Email: ${employeeTwo.email}</p><p class='other'>${employeeTwoOther}</p></div></div>` +
                    `<div class='employee'><div class='card-header'><h2 class='name'>${employeeThree.name}</h2><h3 class='occupation'>Manager</h3></div><div class='info'><p class='id'>Employee ID: ${employeeThree.id}</p><p class='email'>Email: ${employeeThree.email}</p><p class='other'>${employeeThreeOther}</p></div></div>` +
                    `</main></body></html>`;
                sendData(JSON.stringify(newFile))
            }
        })
}

const sendData = function (data, manager) {
    fs.writeFile("./dist/index.html", data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Data has been logged");
        }
    });
}