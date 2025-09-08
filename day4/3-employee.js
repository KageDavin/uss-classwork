"use strict";
class Employee {
    id;
    name;
    salary;
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Salary: $${this.salary}`;
    }
}
class Manager extends Employee {
    department;
    constructor(id, name, salary, department) {
        super(id, name, salary); // Calls the parent class constructor
        this.department = department;
    }
    getDetails() {
        return `${super.getDetails()}, Department: ${this.department}`;
    }
}
class Developer extends Employee {
    programmingLanguage;
    constructor(id, name, salary, programmingLanguage) {
        super(id, name, salary);
        this.programmingLanguage = programmingLanguage;
    }
    getDetails() {
        return `${super.getDetails()}, Language: ${this.programmingLanguage}`;
    }
}
// Create and test objects
const manager = new Manager(1, 'Alice', 100000, 'Marketing');
const developer = new Developer(2, 'Bob', 80000, 'TypeScript');
console.log(manager.getDetails());
console.log(developer.getDetails());
