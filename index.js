const { prompt } = require('inquirer');

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
            choices: ['Manager', 'Engineer', 'Intern'],
        },


    ]).then(ans => {
        const corpTeamEl = document.querySelector("#corp-team");
        corpTeamEl.append(
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
                    <li class="list-group-item">Email: ${ans.email}</li>
                    <li class="list-group-item">Office Number: ${ans.officeNumber}</li>
                </ul>
            </div>
        </div>`
    )})
}

function addEngineer() {
    prompt([
        {
            type: "input",
            name: "manager",
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
            name: "officeNumber",
            message: "What is your engineer's Github username?"
        },
        {
            type: 'list',
            name: "role",
            message: "Which type of team member would you like to add?",
            choices: ['Manager', 'Engineer', 'Intern'],
        },


    ]).then(ans => console.log(ans))
}

function addIntern() {
    prompt([
        {
            type: "input",
            name: "manager",
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
            name: "officeNumber",
            message: "What is your intern's school?"
        },
        {
            type: 'list',
            name: "role",
            message: "Which type of team member would you like to add?",
            choices: ['Manager', 'Engineer', 'Intern'],
        },


    ]).then(ans => console.log(ans))
}

addManager();