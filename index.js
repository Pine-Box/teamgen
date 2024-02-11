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


// const manager = new Manager('manager',1234,'test@tes.com','0123456789');
// console.log(manager);
// const intern = new Intern('intern',2,'test1@test.com','UCLA');
// console.log(intern);
// const engineer = new Engineer('engineer',12345,'test2@test.com','githubuser');
// console.log(engineer);


const team = new Team();

// team.addTeamMember(engineer);
// team.addTeamMember(manager);
// team.addTeamMember(intern);

//console.log(team.generateTeamPage());


const action_questions = [
    {
    type: 'list',   
    name: "team",
    message: "What would you like to do?",
    choices: ['Add Manager','Add Engineer','Add Intern', 'Export Team','Quit'],
     },
     {
        when: input => {
            if (input.team == "Quit")
              process.exit();
        },
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
]

     const engineer_questions = [
        {
 
            name: "engineer-name",
            message: "What wis your name?",
        }]

function getEngineerAnswers(){
    return inquirer.prompt(engineer_questions).then((answers) => {
        console.log(answers);
        return answers;  
     });

}

function  getAnswers() {
 
    return inquirer.prompt(action_questions).then((answers) => {
           console.log(answers);
           if (answers.team === 'Quit'){
               return answers.team;
           }
            else {
                return getAnswers()
           };
             
        });
    }


getAnswers(action_questions)
   .then(console.log)
   .catch((error) =>{ console.log(error)})










