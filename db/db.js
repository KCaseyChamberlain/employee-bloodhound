const db = require('./connection.js');
const cTable = require ('console.table');

// selects the employee table. joins with role name department name
function selectAllEmployees() {
    const sql = `
    SELECT employee.employee_id, employee.first_name, employee.last_name, role.role_name, role.salary, department.department_name, employee.manager_id 
    FROM employee
    INNER JOIN role 
    ON employee.role_id = role.id_role
    INNER JOIN department
    ON role.department_id = department.id;
`;
    db.query(sql, (err, rows) => {
        if (err) {
            console.log("error occured!", err)
            return;
        }
        console.clear()
        console.table(rows)
    });
}

// selects role table. joins with department name.
function selectAllRoles() {
    const sql = `
    SELECT role.id_role, role.role_name, role.salary, department.department_name
    FROM role
    INNER JOIN department 
    ON role.department_id = department.id;
    `;
    db.query(sql, (err, rows) => {
        if (err) {
            console.log("error occured!", err)
            return;
        }
        console.clear()
        console.table(rows)
    });
}

// selects the whole department table
function selectAllDepartments() {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, rows) => {
        if (err) {
            console.log("error occured!", err)
            return;
        }
        console.clear()
        console.table(rows)
    });
}

// updates employee role using the employee id. dynamically does this using the model.
function updateEmployee(employee) {
    const sql = `
    UPDATE employee
    SET role_id = ${employee.updateNewRoleId} 
    WHERE employee_id = ${employee.updateId}
    `;
    const lookUp = `SELECT * FROM employee WHERE employee_id = ${employee.updateId}`

    db.query(sql, (err, rows) => {
        if (err) {
            console.log("error occured!", err)
            return;
        }
        db.query(lookUp, (err, rows) => {
            if (err) {
                console.log("error occured!", err)
                return;
            }
            console.clear()
            console.log("Employee has been updated!")
            console.table(rows)
            process.exit(1)
        });
    });
}

// adds new employee to employee table using the employee model. consoles the table using the last inserted employee_id.
function addEmployee(employee) {
    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${employee.firstName}', '${employee.lastName}' , ${employee.roleID}, ${employee.managerID})`;
    const lookUp = `SELECT * FROM employee WHERE employee_id = LAST_INSERT_ID()`
    db.query(sql, (err, rows) => {
        if (err) {
            console.log("error occured!", err)
            return;
        }
        db.query(lookUp, (err, rows) => {

            if (err) {
                console.log("error occured!", err)
                return;
            }
            console.clear()
            console.log("Employee has been added!")
            console.table(rows)
            process.exit(1)
        });
    });
}

// adds role to role table. consoles using the last inserted id_role.
function addRole(role) {
    const sql = `INSERT INTO role (role_name, salary, department_id) VALUES ('${role.title}', '${role.rolesalary}' , ${role.roleDep})`;
    const lookUp = `SELECT * FROM role WHERE id_role = LAST_INSERT_ID()`
    db.query(sql, (err, rows) => {
        if (err) {
            console.log("error occured!", err)
            return;
        }
        db.query(lookUp, (err, rows) => {

            if (err) {
                console.log("error occured!", err)
                return;
            }
            console.clear()
            console.log("Role has been added!")
            console.table(rows)
            process.exit(1)
        });
    });
}

// adds department to department table. consoles the department using the last inserted id.
function addDepartment(department) {
    const sql = `INSERT INTO department (department_name) VALUES ('${department.depName}')`;
    const lookUp = `SELECT * FROM department WHERE id = LAST_INSERT_ID()`
    db.query(sql, (err, rows) => {
        if (err) {
            console.log("error occured!", err)
            return;
        }
        db.query(lookUp, (err, rows) => {

            if (err) {
                console.log("error occured!", err)
                return;
            }
            console.clear()
            console.log("Department has been added!")
            console.table(rows)
            process.exit(1)
        });
    });
}

// exporting functions
module.exports = {
    selectAllEmployees,
    selectAllRoles,
    selectAllDepartments,
    addEmployee,
    addRole,
    addDepartment,
    updateEmployee
}