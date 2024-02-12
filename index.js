const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");

const Team = require("./lib/Team");
//const generateHTML = require("./src/page-template");

const path = require("path");
const fs = require("fs");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");


//main team global instance where employees are added
const team = new Team();


// collection of questions - some questions are skipped depending on which employee being created 
const action_questions = [
    {
        type: 'list',
        name: "team",
        message: "What would you like to do?",
        choices: ['Add Manager', 'Add Engineer', 'Add Intern'],
 
    },
    {
        type: "input",
        name: "name",
        message: "What is their name ?:",
    },
    {
        type: "input",
        name: "id",
        message: "What is their employee ID ?:",
    },
    {
        type: "input",
        name: "email",
        message: "What is their email ?:",
    },
    {
        when: input => {
            return input.team == "Add Manager"
        },
        type: "input",
        name: "phone",
        message: "What is their phone number ?:",
    },
    {
        when: input => {
            return input.team == "Add Intern"
        },
        type: "input",
        name: "school",
        message: "What is their school ?:",
    },
    {
        when: input => {
            return input.team == "Add Engineer"
        },
        type: "input",
        name: "github",
        message: "What is their github username ?:",
    },
    {        type: "input",
             name: "Quit",
             message: "Quit ? (y/n)",
},
]

// function to gather the answers if the user wishes to add an employee to the team page
function getAnswers(){
    return inquirer
    .prompt(action_questions)
    .then(
        (answers)=> {
       return answers; 
        });
    };

//create and add an instance of an manager to the team instance from answers gathered    
function addManager(answers){
    const manager = new Manager(answers.name,answers.id,answers.email,answers.phone)
    team.addTeamMember(manager);
}

//create and add an instance of an engineer to the team instance from answers gathered
function addEngineer(answers){
    const engineer = new Engineer(answers.name,answers.id,answers.email,answers.github)
    team.addTeamMember(engineer);
}

//create and add an instance of an intern to the team instance from answers gathered

function addIntern(answers){
    const intern = new Intern(answers.name,answers.id,answers.email,answers.school)
    team.addTeamMember(intern);
}

//function to generate to the project root the team page
function exportPage(){
    let html = team.generateTeamPage(); 
    console.log(html);
    fs.writeFileSync(outputPath, html);
}

// main function that repeats until the user selects to quit

 async function init(){
    const answers = await getAnswers();
    if (answers.team === 'Add Manager')
        addManager(answers);
    if (answers.team === 'Add Engineer')
        addEngineer(answers);
    if (answers.team === 'Add Intern')
        addIntern(answers);
    if (answers.Quit === 'y'){
        exportPage();
        }
    else{     
        init();
    }
 }   

init();








