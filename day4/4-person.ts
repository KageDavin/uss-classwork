
interface PersonInfo {
  empName: string;
  empAge: number;
}

interface EmployeeInfo extends PersonInfo {
  empId: number;
  empDepart: string;
}

class HumanResources implements EmployeeInfo, PersonInfo {
  constructor(
    public empName: string,
    public empAge: number,
    public empId: number,
    public empDepart: string
  ) {}
}

function printEmployee(emp: EmployeeInfo): void {
  console.log(
    `Name: ${emp.empName}, Age: ${emp.empAge}, ID: ${emp.empId}, Dept: ${emp.empDepart}`
  );
}

const demographics: EmployeeInfo = {
  empName: "Charlie",
  empAge: 45,
  empId: 501,
  empDepart: "IT"
};

printEmployee(demographics);