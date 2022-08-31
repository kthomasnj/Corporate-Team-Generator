const { prompt } = require('inquirer');
const fs = require('fs');
const cheerio = require("cheerio");
var http = require('http');
let res = [];
let htmlCard = [];
const headerHTML = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Corporate Team</title>
    <link href="./asset/css/style.css" rel="stylesheet" />
</head>

<body>
    <header class="navbar p-5 mb-5 bg-primary justify-content-around shadow">
        <h1 class="text-light">Corporate Team</h1>
    </header>

    <main class="d-flex justify-content-center flex-wrap" id="corp-team">`;

    const footerHTML = `</main>


    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script defer src="https://use.fontawesome.com/releases/v6.1.2/js/all.js"
        integrity="sha384-11X1bEJVFeFtn94r1jlvSC7tlJkV2VJctorjswdLzqOJ6ZvYBSZQkaQVXG0R4Flt"
        crossorigin="anonymous"></script>
</body>

</html>`;

function addManager() {
    prompt([
        {
            type: "input",
            name: "manager",
            message: "What is the team manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the team manager's ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the team manager's email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the team manager's office number?"
        },
        {
            type: 'list',
            name: "role",
            message: "Which type of team member would you like to add?",
            choices: ['Manager', 'Engineer', 'Intern', 'No'],
        },


    ]).then(ans => {     
        let createManagerCard =
        `<div class="card m-3 shadow" style="width: 18rem;">
            <header class="bg-primary p-3 text-light d-flex justify-content-around">
                <div>
                    <h1>${ans.manager}</h1>
                    <p>Manager</p>
                </div>
            <h1 class="align-self-center"><i class="fa-solid fa-mug-hot pb-2"></i></h1>
            </header>
        <div class="card-body bg-light">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${ans.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${ans.email}">${ans.email}</a></li>
                <li class="list-group-item">Office Number: ${ans.officeNumber}</li>
            </ul>
        </div>
    </div>`;   

        res.push(createManagerCard);
        addTeamMember(ans.role);
    });

}


function addEngineer() {
    prompt([
        {
            type: "input",
            name: "engineer",
            message: "What is your engineer's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your engineer's ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your engineer's email?"
        },
        {
            type: "input",
            name: "github",
            message: "What is your engineer's Github username?"
        },
        {
            type: 'list',
            name: "role",
            message: "Which type of team member would you like to add?",
            choices: ['Manager', 'Engineer', 'Intern', 'No'],
        },

    ]).then(ans => {
        let createEngineerCard =
    `<div class="card m-3 shadow" style="width: 18rem;">
    <header class="bg-primary p-3 text-light d-flex justify-content-around">
        <div>
            <h1>${ans.engineer}</h1>
            <p>Manager</p>
        </div>
        <h1 class="align-self-center"><i class="fa-solid fa-user-gear"></i></h1>
    </header>
    <div class="card-body bg-light">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${ans.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${ans.email}">${ans.email}</a></li>
            <li class="list-group-item">GitHub Account: <a href="https://github.com/${ans.github}">${ans.github}</a></li>
        </ul>
    </div>
</div>`;

        res.push(createEngineerCard);
        addTeamMember(ans.role);
    })
};

function addIntern() {
    prompt([
        {
            type: "input",
            name: "intern",
            message: "What is your intern's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your intern's ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your intern's email?"
        },
        {
            type: "input",
            name: "school",
            message: "What is your intern's school?"
        },
        {
            type: 'list',
            name: "role",
            message: "Which type of team member would you like to add?",
            choices: ['Manager', 'Engineer', 'Intern', 'No'],
        },

    ]).then(ans => {
        let createInternCard =
    `<div class="card m-3 shadow" style="width: 18rem;">
    <header class="bg-primary p-3 text-light d-flex justify-content-around">
        <div>
            <h1>${ans.intern}</h1>
            <p>Manager</p>
        </div>
        <h1 class="align-self-center"><i class="fa-solid fa-graduation-cap"></i></h1>
    </header>
    <div class="card-body bg-light">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${ans.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${ans.email}">${ans.email}</a></li>
            <li class="list-group-item">School: ${ans.school}</li>
        </ul>
    </div>
</div>`

        res.push(createInternCard);
        addTeamMember(ans.role);
    })
};

let addTeamMember = (choices) => {
    if (choices === 'Manager') {
        addManager();
    } else if (choices === 'Engineer') {
        addEngineer();
    } else if (choices === 'Intern') {
        addIntern();
    } else {
        fs.writeFile('./index.html', headerHTML + res.join("") + footerHTML, (err) => {});
    }
}

addManager();
