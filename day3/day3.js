//Day3 Assignments:
// Write a function printPerson that takes a Person object and prints its details.
function printPerson(person) {
    console.log("\nName: ".concat(person.name, "\nAge: ").concat(person.age, "\nEmail: ").concat(person.email, "\n  "));
}
var personDetails = {
    name: 'Restless Rusty',
    age: 25,
    email: 'restless-rusty@fungames.net'
};
console.log('Object assigned to the interface:', personDetails);
console.log('1. Write a function printPerson that takes a Person object and prints its details.');
printPerson(personDetails);
// 2. Class
// Create a class Car with properties: brand, model, and year.
var car = /** @class */ (function () {
    function car(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    car.prototype.getCarInfo = function () {
        return "".concat(this.brand, " ").concat(this.model, " (").concat(this.year, ")");
    };
    return car;
}());
;
console.log('2. Add a method getCarInfo() that returns a string like Toyota Corolla 2021');
var carInfo = new car('Suburu', 'Forester', 2007);
var carInfo2 = new car('Toyota', 'Corolla', 2021);
console.log("Car Info: ".concat(carInfo.getCarInfo()));
console.log("Car Info: ".concat(carInfo2.getCarInfo()));
// 3. Function
// Write a function addNumbers(a: number, b: number): number that returns the sum of two numbers.
var numSum = function (num1, num2) { return num1 + num2; };
console.log('\n3. Write a function addNumbers(a: number, b: number): number that returns the sum of two numbers.');
numSum(2, 5);
console.log("Sum: ".concat(numSum(2, 5)));
numSum(10, 15);
console.log("Sum: ".concat(numSum(10, 15)));
// 4. Function Parameters
// (a) Optional Parameter
//  Create a function greet(name: string, message?: string) that prints:
//  “Hello Alice!” if message is not given
//  “Hello Alice, Good Morning!” if message is given
function greeting(name, message) {
    var hello = "Hello";
    var checkMessage = message ? "Good Morning!" : "";
    if (message) {
        console.log("Message was provided: ".concat(message));
        console.log("".concat(hello, " ").concat(name, ", ").concat(checkMessage));
    }
    else {
        console.log("Message was NOT provided");
        console.log("".concat(hello).concat(name, " ").concat(checkMessage));
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
function greetings(name, text) {
    if (text === void 0) { text = "Welcome!"; }
    var hello = "Hello";
    console.log("".concat(hello, " ").concat(name, ", ").concat(text));
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
function sumAll() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (acc, curr) { return acc + curr; }, 0);
}
console.log();
console.log('4.(c) Rest Parameter');
console.log('Sum of all numbers: ', sumAll(1, 2, 3, 4, 5));
console.log('Sum of all numbers: ', sumAll(10, 20, 30));
console.log('Sum of all numbers: ', sumAll(100, 200));
console.log('Sum of all numbers: ', sumAll(7, 14, 21, 28, 35, 42));
// 5. Anonymous Function
// Assign an anonymous function to a variable multiply that multiplies two numbers.
var multiply = function (a, b) {
    return a * b;
};
console.log();
console.log('5. Anonymous Function');
console.log("Multiplying 3 and 4 gives: ".concat(multiply(3, 4)));
console.log("Multiplying 7 and 8 gives: ".concat(multiply(7, 8)));
// 6. Named Function
function factorial(n) {
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
console.log("Factorial of 5 is: ".concat(factorial(5)));
console.log("Factorial of 6 is: ".concat(factorial(6)));
console.log("Factorial of 0 is: ".concat(factorial(0)));
console.log("Factorial of -3 is: ".concat(factorial(-3)));
// 7. Arrow Function
// Write an arrow function isEven = (num: number) => boolean that returns true if the number is even, else false.
// Example: isEven(6) → true
var isEven = function (num) {
    return num % 2 === 0;
};
console.log();
console.log('7. Arrow Function');
console.log("isEven(6) \u2192 ".concat(isEven(6)));
console.log("isEven(7) \u2192 ".concat(isEven(7)));
console.log("isEven(0) \u2192 ".concat(isEven(0)));
console.log("isEven(-3) \u2192 ".concat(isEven(-3)));
console.log('All assignments completed.');
