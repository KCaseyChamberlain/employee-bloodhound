starterQuestion = [
    {
        type: 'list',
        name: 'starterQ',
        message: "How would you like to manage your team? (Required)",
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role'
        ]
    },
]

employeeQuestions = [
    {
        type: 'input',
        name: 'emFirstName',
        message: "What is the employee's first name? (Required)",
        validate: emFirstName => {
            if (emFirstName) {
                return true;
            } else {
                console.log("Please enter the employee's first name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'emLastName',
        message: "What is the employee's last name? (Required)",
        validate: emLastName => {
            if (emLastName) {
                return true;
            } else {
                console.log("Please enter the employee's last name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'emRoleID',
        message: "What is the employee's role ID? (Required)",
        validate: emRoleID => {
            if (emRoleID) {
                return true;
            } else {
                console.log("Please enter the employee's role ID!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'emManagerID',
        message: "What is the employee's manager's ID? (Required)",
        validate: emManagerID => {
            if (emManagerID) {
                return true;
            } else {
                console.log("Please enter the employee's manager's ID!");
                return false;
            }
        }
    }
]

roleQuestions = [
    {
        type: 'input',
        name: 'roleName',
        message: "What is the role's name? (Required)",
        validate: roleName => {
            if (roleName) {
                return true;
            } else {
                console.log("Please enter the role's name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'roleSalary',
        message: "What is the role's salary? (Required)",
        validate: roleSalary => {
            if (roleSalary) {
                return true;
            } else {
                console.log("Please enter the role's salary!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'roleDepID',
        message: "What is the role's department ID? (Required)",
        validate: roleDepID => {
            if (roleDepID) {
                return true;
            } else {
                console.log("Please enter the role's department ID!");
                return false;
            }
        }
    }
]

departmentQuestions = [
    {
        type: 'input',
        name: 'depName',
        message: "What is the department's name? (Required)",
        validate: depName => {
            if (depName) {
                return true;
            } else {
                console.log("Please enter the department's name!");
                return false;
            }
        }
    }
]

module.exports = { starterQuestion, employeeQuestions, roleQuestions, departmentQuestions };