class Employee {
  constructor(public id: number, public name: string, public salary: number) {}

  getDetails(): string {
    return `ID: ${this.id}, Name: ${this.name}, Salary: $${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(id: number, name: string, salary: number, public department: string) {
    super(id, name, salary); // Calls the parent class constructor
  }

  getDetails(): string {
    return `${super.getDetails()}, Department: ${this.department}`; // Overrides method
  }
}

class Developer extends Employee {
  constructor(id: number, name: string, salary: number, public programmingLanguage: string) {
    super(id, name, salary);
  }

  getDetails(): string {
    return `${super.getDetails()}, Language: ${this.programmingLanguage}`;
  }
}

// Create and test objects
const manager = new Manager(1, 'Alice', 100000, 'Marketing');
const developer = new Developer(2, 'Bob', 80000, 'TypeScript');

console.log(manager.getDetails());
console.log(developer.getDetails());
