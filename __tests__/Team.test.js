const Team = require("../lib/Team");
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");
const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");
test("Can instantiate Team instance", () => {
  const e = new Team();
  expect(typeof(e)).toBe("object");
});

test("New Team instance should have zero members", () => {
    const e = new Team();
    expect(e.getTeamCount()).toEqual(0);
  });

  test("New Team instance should have 1 members when member added", () => {
    const e = new Team();
    const employee = new Employee('rob',1,'test@test.com')
    e.addTeamMember(employee)
    expect(e.getTeamCount()).toEqual(1);
  });

  test("New Team instance returns html fragment containing engineers values", () => {
    const e = new Team();
    const engineer = new Engineer('robert','1234567890','test@test.com','githubuser')
    expect(e.generateEngineer(engineer)).toContain('robert');
    expect(e.generateEngineer(engineer)).toContain('test@test.com');
    expect(e.generateEngineer(engineer)).toContain('1234567890');
    expect(e.generateEngineer(engineer)).toContain('githubuser');
  });

  test("New Team instance returns html fragment containing manager values", () => {
    const e = new Team();
    const manager = new Manager('graham','123456','random@test.com','07477898765')
    expect(e.generateManager(manager)).toContain('graham');
    expect(e.generateManager(manager)).toContain('random@test.com');
    expect(e.generateManager(manager)).toContain('123456');
    expect(e.generateManager(manager)).toContain('07477898765');
  });


  test("New Team instance returns html fragment containing manager values", () => {
    const e = new Team();
    const intern = new Intern('rupert','12345678','scholar@test.com','UCLA School')
    expect(e.generateIntern(intern)).toContain('rupert');
    expect(e.generateIntern(intern)).toContain('scholar@test.com');
    expect(e.generateIntern(intern)).toContain('12345678');
    expect(e.generateIntern(intern)).toContain('UCLA School');
  });
  

