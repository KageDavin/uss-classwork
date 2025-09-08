"use strict";
class Animal {
    eat() {
        console.log('Animal is eating.');
    }
}
class Mammal extends Animal {
    walk() {
        console.log('Mammal is walking.');
    }
}
class Dog extends Mammal {
    bark() {
        console.log('Dog is barking.');
    }
}
// Create a Dog object and call all methods
const myDog = new Dog();
myDog.eat();
myDog.walk();
myDog.bark();
