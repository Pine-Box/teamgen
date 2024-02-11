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


const manager = new Manager('manager',1234,'test@tes.com','0123456789');
console.log(manager);
const intern = new Intern('intern',2,'test1@test.com','UCLA');
console.log(intern);
const engineer = new Engineer('engineer',12345,'test2@test.com','githubuser');
console.log(engineer);


const team = new Team();

team.addTeamMember(engineer);
team.addTeamMember(manager);
team.addTeamMember(intern);

console.log(team.generateTeamPage());






