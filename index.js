const fs = require("fs");
const inquirer = require("inquirer");
 
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const prompts = [
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
    },
    {
    type: 'list',
    name: 'role',
    message: 'Select role',
    choices: ['Manager', 'Engineer', 'Intern'],
    },
    {
    type: 'input',
    name: 'office',
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
    }     
]