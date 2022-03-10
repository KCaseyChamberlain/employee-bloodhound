const inquirer = require('inquirer');
const db = require('./db/connection.js');
const questions = require('./lib/questions.js');
const dataManager = require("./db/db.js")
const dataModel = require("./lib/models.js")

// confirms that the database is functional
db.connect(err => {
    if (err) throw err;
    console.log('\n', 'Database connected.');
});

// the starter questions will loop through the "view table" questions. add/update questions use process.exit(1) to exit the app and give the user a stopping point.
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
                    addEmployeeQuestions()
                    break;

                case 'Add a role':
                    addRoleQuestions()
                    break;

                case 'Add a department':
                    addDepartmentQuestions()
                    break;
                
                case 'Update an employee role':
                    updateEmployeeRoleQuestions()
                    break;

                default:
                    console.log("Selection invalid!")
            }
        })
}

// these 4 functions prompt an array of questions based on the user's input. question's answers are then used in the employee/role/department models.
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