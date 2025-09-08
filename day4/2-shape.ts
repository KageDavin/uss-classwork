interface Shape {
  area(): number;
}

class Circle implements Shape {
  constructor(public radius: number) {}

  area(): number {
    // The correct rounding logic
    const areaValue = Math.PI * this.radius ** 2;
    return Math.round(areaValue * 100) / 100;
  }
}

class Rectangle implements Shape {
  constructor(public width: number, public height: number) {}

  area(): number {
    // The correct rounding logic
    const areaValue = this.width * this.height;
    return Math.round(areaValue * 100) / 100;
  }
}

// Test the implementations
const myCircle = new Circle(5);
const myRectangle = new Rectangle(4, 6);

console.log(`Area of circle: ${myCircle.area()}`);
console.log(`Area of rectangle: ${myRectangle.area()}`);
