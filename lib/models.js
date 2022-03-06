class Employee {
    constructor(firstName, lastName, roleID, managerID) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.roleID = roleID;
        this.managerID = managerID;
    }
}

class Role {
    constructor(title, roleSalery, roleDep) {
        this.title = title;
        this.roleSalery = roleSalery;
        this.roleDep = roleDep;
    }
}
class Department {
    constructor(depName) {
        this.depName = depName
    }
}



module.exports = {Employee, Role, Department};