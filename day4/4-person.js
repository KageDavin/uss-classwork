"use strict";
class HumanResources {
    empName;
    empAge;
    empId;
    empDepart;
    constructor(empName, empAge, empId, empDepart) {
        this.empName = empName;
        this.empAge = empAge;
        this.empId = empId;
        this.empDepart = empDepart;
    }
}
function printEmployee(emp) {
    console.log(`Name: ${emp.empName}, Age: ${emp.empAge}, ID: ${emp.empId}, Dept: ${emp.empDepart}`);
}
const demographics = {
    empName: "Charlie",
    empAge: 45,
    empId: 501,
    empDepart: "IT"
};
printEmployee(demographics);
