class Animal {
  eat(): void {
    console.log('Animal is eating.');
  }
}

class Mammal extends Animal {
  walk(): void {
    console.log('Mammal is walking.');
  }
}

class Dog extends Mammal {
  bark(): void {
    console.log('Dog is barking.');
  }
}

// Create a Dog object and call all methods
const myDog = new Dog();
myDog.eat();
myDog.walk();
myDog.bark();
