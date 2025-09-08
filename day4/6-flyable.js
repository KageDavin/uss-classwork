"use strict";
class MallardDuck {
    fly() {
        console.log('MallardDuck flying...');
    }
    swim() {
        console.log('MallardDuck swimming...');
    }
}
// Test the multiple inheritance implementation
const myDuck = new MallardDuck();
myDuck.fly();
myDuck.swim();
