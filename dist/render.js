// import data from './data.json' assert { type: 'JSON' };

// const express = require("express");
// const path = require('path');
// const app = express();
// PORT = 3000;

// fetch("./data.js")
//     .then(data => {
//         console.log(data)
//     })

// app.get('/', (req, res) => res.send("./output.html"));

// app.listen(PORT, () =>
//     console.log("Listening on port 3000")
// )

// import { employeeArray } from "../index";
const renderManager = function (employeeArray) {
    const manager = employeeArray[0];
    // const manager = employeeArray[0];
    // Create HTML
    const main = document.querySelector('main');
    const employeeCard = document.createElement('div').setAttribute('class', 'employee');
    const cardHeader = document.createElement('div').setAttribute('class', 'card-header');
    const name = document.createElement('h2').setAttribute('class', 'name');
    const occupation = document.createElement('h2').setAttribute('class', 'occupation');
    const cardInfo = document.createElement('div').setAttribute('class', 'info');
    const id = document.createElement('p').setAttribute('class', 'id');
    const email = document.createElement('p').setAttribute('class', 'email');
    const other = document.createElement('p').setAttribute('class', 'other');
    // Change content within HTML
    name.textContent = manager.name;
    occupation.textContent = 'Manager';
    id.textContent = manager.id;
    email.textContent = manager.email;
    office.textContent = manager.office;
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
}

employeeData = [{ "name": "Ron", "id": "1211", "email": "ron@gmail.com", "officeNum": "230" }]
renderManager(employeeData);