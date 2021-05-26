const fs = require("fs");
const inquirer = require("inquirer");
 
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generatePage = require("./src/page-template");

var employeePrompts = [
    {
    type: 'input',
    name: 'officeNumber',
    message: 'Enter manager office number',
    },
    {
    type: 'input',
    name: 'username',
    message: "Enter engineer's GitHub username",
    },
    {
    type: 'input',
    name: 'school',
    message: "Enter intern's school",
    }]
class team {
    constructor() {
        this.employee;
        this.managers = [];
        this.engineers = [];
        this.interns = [];
    }

initializePrompts() {
    inquirer.prompt([
        {
        type: 'list',
        name: 'role',
        message: 'Select employee role:',
        choices: ['Manager', 'Engineer', 'Intern'],
        },
        {
        type: 'input',
        name: 'name',
        message: 'Enter employee name',
        validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please enter employee name");
              return false;
            }
        },
        },
        {
        type: 'input',
        name: 'id',
        message: 'Enter employee ID',
        validate: (idInput) => {
            if (idInput) {
              return true;
            } else {
              console.log("Please enter employee ID");
              return false;
            }
        },
        },
        {
        type: 'input',
        name: 'email',
        message: 'Please enter employee email address',
        validate: (emailInput) => {
            if (emailInput) {
              return true;
            } else {
              console.log("Please enter your email");
              return false;
            }
        }
    },
    ]).then((employeeData) => {
        switch (employeeData.role) {
            case 'Manager':
              this.addManager(employeeData);
              break;
            case 'Engineer':
              this.addEngineer(employeeData);
              break;
            case 'Intern':
              this.addIntern(employeeData);
              break;
    }
});
}

    addManager(employeeData) {
        inquirer.prompt(employeePrompts[0])
        .then((office) => {
            let newManager = new Manager(
                employeeData.name,
                employeeData.id,
                employeeData.email,
                office.officeNumber
            );
            this.managers.push(newManager);
            // console.log(this.managers);

            return this.addEmployeesConfirm();
        });
    }

    addEngineer(employeeData) {
        inquirer.prompt(employeePrompts[1])
        .then((github) => {
            let newEngineer = new Engineer(
                employeeData.name,
                employeeData.id,
                employeeData.email,
                github.username
            );
            this.engineers.push(newEngineer);
            // console.log(newEngineer);

            return this.addEmployeesConfirm();
        });
    }

    addIntern(employeeData) {
        inquirer.prompt(employeePrompts[2])
        .then((school) => {
            let newIntern = new Intern(
                employeeData.name,
                employeeData.id,
                employeeData.email,
                school.school
            );
            this.interns.push(newIntern);
            // console.log(newIntern);

            return this.addEmployeesConfirm();
        });
    }

    addEmployeesConfirm() {
        inquirer.prompt(
            {
                type: 'confirm',
                name: 'addConfirm',
                message: 'Do you want to add another employee?',
                default: true
            })
        .then(({addConfirm}) => {
            if(addConfirm) {
                this.initializePrompts();
            } else {
                const pageHTML = generatePage(this.managers, this.engineers, this.interns)
                console.log('==========================');
                console.log(this.managers, this.engineers, this.interns);                 
                fs.writeFile('./dist/index.html', pageHTML, err => {
                    if (err) throw new Error(err);
                console.log('Your team profile has been generated! Check out index.html in this directory to see it.');
            })
        }
    })
}
}

new team().initializePrompts();
