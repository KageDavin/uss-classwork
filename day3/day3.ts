//Day3 Assignments:

// 1. Interface
// Create an interface Person with properties: name, age, and email.

interface person {
  name: string;
  age: number;
  email: string;
}

// Write a function printPerson that takes a Person object and prints its details.

function printPerson(person: person) {
  console.log(`
Name: ${person.name}
Age: ${person.age}
Email: ${person.email}
  `);
}

const personDetails: person = {
  name: 'Restless Rusty',
  age: 25,
  email: 'restless-rusty@fungames.net'
};

console.log('Object assigned to the interface:', personDetails);
console.log('1. Write a function printPerson that takes a Person object and prints its details.');
printPerson(personDetails);

// 2. Class
// Create a class Car with properties: brand, model, and year.

class car {
constructor(public brand: string, public model: string, public year: number){}

getCarInfo(): string {
return `${this.brand} ${this.model} (${this.year})`;
}
 };

console.log('2. Add a method getCarInfo() that returns a string like Toyota Corolla 2021');
const carInfo = new car('Suburu', 'Forester', 2007);
const carInfo2 = new car('Toyota', 'Corolla', 2021);
console.log(`Car Info: ${carInfo.getCarInfo()}`);
console.log(`Car Info: ${carInfo2.getCarInfo()}`);

// 3. Function
// Write a function addNumbers(a: number, b: number): number that returns the sum of two numbers.
const numSum: (num1: number, num2: number) => number = (num1, num2) => num1 + num2;
console.log('\n3. Write a function addNumbers(a: number, b: number): number that returns the sum of two numbers.');
numSum(2, 5);
console.log(`Sum: ${numSum(2, 5)}`);
numSum(10, 15);
console.log(`Sum: ${numSum(10, 15)}`);

// 4. Function Parameters
// (a) Optional Parameter
//  Create a function greet(name: string, message?: string) that prints:
//  “Hello Alice!” if message is not given
//  “Hello Alice, Good Morning!” if message is given

function greeting(name: string, message?: string): void {

  const hello = "Hello";
  const checkMessage = message ? "Good Morning!" : "";

  if (message) {
    console.log(`Message was provided: ${message}`);

    console.log(`${hello} ${name}, ${checkMessage}`);

  } else {
    console.log("Message was NOT provided");
    console.log(`${hello}${name} ${checkMessage}`);

  }

}
console.log();
console.log('4.(a) Optional Parameter');
console.log('Called with different values.');
greeting('Alice');
greeting('Alice', 'Yo');
greeting('Bob');
greeting('Bob', 'Go Home Now');


// (b) Default Parameter
// Modify the greet function to have a default value for message as “Welcome!”.
// So, if message is not provided, it should print “Hello Alice, Welcome!””

function greetings(name: string, text: string = "Welcome!"): void {
  const hello = "Hello";
  console.log(`${hello} ${name}, ${text}`);
}
console.log();
console.log('4.(b) Default Parameter');
console.log('No message provided.');
greetings('Alice');
console.log('Message provided.');
greetings('Alice', 'Good-Bye!');
console.log('No message provided.');
greetings('Bob');
console.log('Message provided.');
greetings('Bob', 'See you later!');

// (c) Rest Parameter
// Create a function sumAll(...numbers: number[]) that returns the sum of any number of arguments.

function sumAll(...numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log();
console.log('4.(c) Rest Parameter');
console.log('Sum of all numbers: ', sumAll(1, 2, 3, 4, 5));
console.log('Sum of all numbers: ', sumAll(10, 20, 30));
console.log('Sum of all numbers: ', sumAll(100, 200));
console.log('Sum of all numbers: ', sumAll(7, 14, 21, 28, 35, 42));
// 5. Anonymous Function
// Assign an anonymous function to a variable multiply that multiplies two numbers.
const multiply = function (a: number, b: number): number {
  return a * b;
};
console.log();
console.log('5. Anonymous Function');
console.log(`Multiplying 3 and 4 gives: ${multiply(3, 4)}`);
console.log(`Multiplying 7 and 8 gives: ${multiply(7, 8)}`);

// 6. Named Function
function factorial(n: number): number {
  if (n === 0) {
    return 1;
  }
  if (n < 0) {
    console.log('Factorial is not defined for negative numbers.');
    return 0;
  }
  return n * factorial(n - 1);
}

console.log();
console.log('6. Named Function');
console.log(`Factorial of 5 is: ${factorial(5)}`);
console.log(`Factorial of 6 is: ${factorial(6)}`);
console.log(`Factorial of 0 is: ${factorial(0)}`);
console.log(`Factorial of -3 is: ${factorial(-3)}`);

// 7. Arrow Function
// Write an arrow function isEven = (num: number) => boolean that returns true if the number is even, else false.
// Example: isEven(6) → true

const isEven = (num: number): boolean => {
  return num % 2 === 0;
};

console.log();
console.log('7. Arrow Function');
console.log(`isEven(6) → ${isEven(6)}`);
console.log(`isEven(7) → ${isEven(7)}`);
console.log(`isEven(0) → ${isEven(0)}`);
console.log(`isEven(-3) → ${isEven(-3)}`);

console.log('All assignments completed.');
