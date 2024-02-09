// TODO: Write code to define and export the Employee class
class Employee{

    id;
    name;
    email;
    role;

    constructor(name, id, email){
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = 'Employee';
    }

    getName() {
        return this.name;
    }

    getRole(){
        return this.role;
    }

    getEmail(){
        return this.email;
    }

    getId(){
        return this.id;
    }

}

module.exports = Employee
