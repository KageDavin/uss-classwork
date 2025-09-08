interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
  department: string;
}

function printEmployee(emp: Employee): void {
  console.log(`Name: ${emp.name}, Age: ${emp.age}, ID: ${emp.employeeId}, Dept: ${emp.department}`);
}

// Create an object that matches the Employee interface
const myEmployee: Employee = {
  name: 'Charlie',
  age: 45,
  employeeId: 501,
  department: 'IT'
};

printEmployee(myEmployee);
