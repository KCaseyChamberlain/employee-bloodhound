class Employee {
    constructor(firstName, lastName, roleID, managerID) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.roleID = roleID;
        this.managerID = managerID;
    }
}

class Role {
    constructor(title, roleDep, roleSalery) {
        this.title = title;
        this.roleDep = roleDep;
        this.roleSalery = roleSalery
    }
}
class Department {
    constructor(depName) {
        this.depName = depName
    }
}



module.exports = {Employee, Role, Department};