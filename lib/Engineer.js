const Employee = require('./Employee');


class Engineer extends Employee {
    github;
    role;
    constructor(name,id,email,github) {
       super(name,id,email); 
       this.role = 'Engineer';
       this.github = github;
    }

    getRole(){
        return this.role;
    }

    getGithub(){
        return this.github;
    }

}

module.exports = Engineer

