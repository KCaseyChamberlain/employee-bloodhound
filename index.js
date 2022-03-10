const inquirer = require('inquirer');
const db = require('./db/connection.js');
const questions = require('./lib/questions.js');
const dataManager = require("./db/db.js")
const dataModel = require("./lib/models.js")

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
                        starterQuestions()
                    break;

                case 'View all roles':
                    dataManager.selectAllRoles();
                    starterQuestions()
                    break;

                case 'View all departments':
                    dataManager.selectAllDepartments();
                    starterQuestions()
                    break;

                case 'Add an employee':
                    addEmployeeQuestions();
                    // await.starterQuestions()
                    break;

                case 'Add a role':
                    addRoleQuestions()
                    // starterQuestions();
                    break;

                case 'Add a department':
                    addDepartmentQuestions();
                    // starterQuestions()
                    break;
                
                case 'Update an employee role':
                    updateEmployeeRoleQuestions();
                    // starterQuestions()
                    break;

                default:
                    console.log("Selection invalid!")
            }
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
            var role = new dataModel.Role(answers.roleName, answers.roleSalary, answers.roleDepID)
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

function updateEmployeeRoleQuestions() {
    inquirer
        .prompt(questions.updateQuestions)
        .then(function (answers) {
            var employee = new dataModel.UPEmployee(answers.updateId, answers.updateNewRoleId)
            dataManager.updateEmployee(employee)
        })
}

// starts application
starterQuestions()

module.exports = { starterQuestions }
