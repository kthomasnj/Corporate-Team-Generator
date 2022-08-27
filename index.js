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
                choices: ['Manager','Engineer','Intern'],
            },
            
    
        ]).then(ans => {
            
        })
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
                choices: ['Manager','Engineer','Intern'],
            },
            
    
        ]).then(ans => console.log(ans) )
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
                choices: ['Manager','Engineer','Intern'],
            },
            
    
        ]).then(ans => console.log(ans) )
    }

    addManager();