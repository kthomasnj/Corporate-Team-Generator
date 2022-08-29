const { prompt } = require('inquirer');
const fs = require('fs');
const cheerio = require("cheerio");
var http = require('http');
let res = [];

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
        res.push(ans);
        addTeamMember(ans.role);
    });

    // `<div class="card m-3 shadow" style="width: 18rem;">
    //             <header class="bg-primary p-3 text-light d-flex justify-content-around">
    //                 <div>
    //                     <h1>${res.manager}</h1>
    //                     <p>Manager</p>
    //                 </div>
    //                 <h1 class="align-self-center"><i class="fa-solid fa-mug-hot pb-2"></i></h1>
    //             </header>
    //             <div class="card-body bg-light">
    //                 <ul class="list-group list-group-flush">
    //                     <li class="list-group-item">ID: ${res.id}</li>
    //                     <li class="list-group-item">Email: ${res.email}</li>
    //                     <li class="list-group-item">Office Number: ${res.officeNumber}</li>
    //                 </ul>
    //             </div>
    //         </div>`

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
        res.push(ans);
        addTeamMember(ans.role);
    })};

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
        res.push(ans);
        addTeamMember(ans.role);
    })};

function addTeamMember(choices) {
if(choices === 'Manager') {
    addManager();
} else if (choices === 'Engineer') {
    addEngineer();
} else if (choices === 'Intern') {
    addIntern();
} else {
    console.log(res)
}
}

addManager();
