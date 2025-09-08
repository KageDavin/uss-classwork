"use strict";
const response = (data) => {
    return {
        success: true,
        data,
        message: 'Request successful',
    };
};
// Test with different types
const stringResponse = response('Hello, world!');
const numberResponse = response(42);
const userResponse = response({ id: 1, name: 'Kirby' });
console.log(stringResponse);
console.log(numberResponse);
console.log(userResponse);
