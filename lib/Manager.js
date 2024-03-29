const Employee = require("../lib/Employee");

class Manager extends Employee{
    officeNumber;
    role;

    constructor(name,id,email,officeNumber)
     {
       super(name,id,email); 
       this.role = 'Manager';
       this.officeNumber = officeNumber;
    }

    getRole(){
        return this.role;
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

}

module.exports = Manager;
