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
                    break;

                case 'View all roles':
                    dataManager.selectAllRoles();
                    break;

                case 'Add an employee':
                    addEmployeeQuestions()
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

// starts application
starterQuestions()