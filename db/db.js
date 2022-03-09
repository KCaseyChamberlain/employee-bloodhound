const db = require('./connection.js');
const cTable = require ('console.table');

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
        // console.clear()
        console.table(rows)
    });
}

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
        console.table(rows)
    });
}

function selectAllDepartments() {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, rows) => {
        if (err) {
            console.log("error occured!", err)
            return;
        }
        console.table(rows)
    });
}

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
            console.log("Employee has been updated!")
            console.table(rows)
        });
    });
}

function addEmployee(employee) {
    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${employee.firstName}', '${employee.lastName}' , ${employee.roleID}, ${employee.managerID})`;
    const lookUp = `SELECT * FROM employee WHERE id = LAST_INSERT_ID()`
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
            console.log("Employee has been added!")
            console.table(rows)
        });
    });
}

function addRole(role) {
    const sql = `INSERT INTO role (role_name, salary, department_id) VALUES ('${role.title}', '${role.rolesalary}' , ${role.roleDep})`;
    const lookUp = `SELECT * FROM role WHERE id = LAST_INSERT_ID()`
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
            console.log("Role has been added!")
            console.table(rows)
        });
    });
}

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
            console.log("Department has been added!")
            console.table(rows)
        });
    });
}


module.exports = {
    selectAllEmployees,
    selectAllRoles,
    selectAllDepartments,
    addEmployee,
    addRole,
    addDepartment,
    updateEmployee
}