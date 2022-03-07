const inquirer = require('inquirer');
const db = require('./db/connection.js');
const questions = require('./lib/questions.js');
const dataManager = require("./db/db.js")
const dataModel = require("./lib/models.js")
const readLine = require('readline');
const { rawListeners } = require('process');

db.connect(err => {
    if (err) throw err;
    console.log('\n', 'Database connected.');
});

function starterQuestions() {
    inquirer
        .prompt(questions.starterQuestion)
        .then(function (answers) {
            switch (answers.starterQ) {
                case 'View all employees':
                    dataManager.selectAllEmployees();
                    break;

                case 'View all roles':
                    dataManager.selectAllRoles();
                    break;

                case 'View all departments':
                    dataManager.selectAllDepartments();
                    break;

                case 'Add an employee':
                    addEmployeeQuestions()
                    break;

                case 'Add a role':
                    addRoleQuestions()
                    break;

                case 'Add a department':
                    addDepartmentQuestions()
                    break;

                default:
                    console.log("Selection invalid!")
            }
            readLine.emitKeypressEvents(process.stdin)
            process.stdin.setRawMode(true)
            process.stdin.resume()
            process.stdin.once('keypress', (str, key) => {
                if (key.ctrl && key.name === 'c') {
                    process.exit();
                }
                process.stdin.setRawMode(false)
                console.clear()
                starterQuestions()
            })
        })
}

function addEmployeeQuestions() {
    inquirer
        .prompt(questions.employeeQuestions)
        .then(function (answers) {
            var employee = new dataModel.Employee(answers.emFirstName, answers.emLastName, answers.emRoleID, answers.emManagerID)
            dataManager.addEmployee(employee)
        })
}

function addRoleQuestions() {
    inquirer
        .prompt(questions.roleQuestions)
        .then(function (answers) {
            var role = new dataModel.Role(answers.roleName, answers.roleSalery, answers.roleDepID)
            dataManager.addRole(role)
        })
}

function addDepartmentQuestions() {
    inquirer
        .prompt(questions.departmentQuestions)
        .then(function (answers) {
            var department = new dataModel.Department(answers.depName)
            dataManager.addDepartment(department)
        })
}



// starts application
starterQuestions()

