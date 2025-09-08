interface Flyable {
  fly(): void;
}

interface Swimmable {
  swim(): void;
}

interface Duck extends Flyable, Swimmable {}

class MallardDuck implements Duck {
  fly(): void {
    console.log('MallardDuck flying...');
  }
  swim(): void {
    console.log('MallardDuck swimming...');
  }
}

// Test the multiple inheritance implementation
const myDuck = new MallardDuck();
myDuck.fly();
myDuck.swim();
