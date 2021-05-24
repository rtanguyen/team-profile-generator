const fs = require("fs");
const inquirer = require("inquirer");
 
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

class team {
    constructor() {
        this.employee;
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
        },
        {
        type: 'input',
        name: 'id',
        message: 'Enter employee ID',
        },
        {
        type: 'input',
        name: 'email',
        message: 'Enter employee email address',
        }
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
    employeePrompts() {
        // inquirer.prompt([
    [{
        type: 'input',
        name: 'officeNumber',
        message: 'Enter manager office number',
        },
        {
        type: 'input',
        name: 'github',
        message: "Enter engineer's GitHub username",
        },
        {
        type: 'input',
        name: 'school',
        message: "Enter intern's school",
        }]
    }
    
    addManager() {
        inquirer.prompt(employeePrompts[0])
        .then((office) => {
            let newManager = new Manager(
                employeeData.name,
                employeeData.id,
                employeeData.email,
                office.officeNumber
            )
        });

        addEmployeesConfirm();
    }

    addEmployeesConfirm() {
        inquirer.prompt(
            {
                type: 'confirm',
                name: 'addConfirm',
                message: 'Do you want to add another employee?',
                default: true
            }
        ).then(({addConfirm}) => {
            if(addConfirm) {
                initializePrompts();
            } else {
                console.log('Your team profile has been generated!');
            }
        })
    }
}

new team().initializePrompts();