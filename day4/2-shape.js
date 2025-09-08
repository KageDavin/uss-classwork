"use strict";
class Circle {
    radius;
    constructor(radius) {
        this.radius = radius;
    }
    area() {
        // The correct rounding logic
        const areaValue = Math.PI * this.radius ** 2;
        return Math.round(areaValue * 100) / 100;
    }
}
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
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
