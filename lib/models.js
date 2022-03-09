class Employee {
    constructor(firstName, lastName, roleID, managerID) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.roleID = roleID;
        this.managerID = managerID;
    }
}

class Role {
    constructor(title, roleSalary, roleDep) {
        this.title = title;
        this.rolesalary = roleSalary;
        this.roleDep = roleDep;
    }
}
class Department {
    constructor(depName) {
        this.depName = depName;
    }
}

class UPEmployee {
    constructor(updateId, updateNewRoleId) {
        this.updateId = updateId;
        this.updateNewRoleId = updateNewRoleId;
    }
}

module.exports = { Employee, Role, Department, UPEmployee };