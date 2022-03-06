const db = require('./connection.js');

function selectAllEmployees() {
    const sql = `SELECT * FROM employee`;
    db.query(sql, (err, rows) => {
        if (err) {
            console.log("error occured!", err)
            return;
        }
        console.table(rows)
    });
}

function selectAllRoles() {
    const sql = `SELECT * FROM role`;
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


function updateEmployee(id, roleID) {
    const sql = `UPDATE employee SET role_id = ${roleID} WHERE id = ${id}`;
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
    const sql = `INSERT INTO role (role_name, salery, department_id) VALUES ('${role.title}', '${role.roleSalery}' , ${role.roleDep})`;
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



module.exports = {
    selectAllEmployees,
    selectAllRoles,
    selectAllDepartments,
    addEmployee,
    addRole
}