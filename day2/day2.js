// Day 2 Assignment: TypeScript Basics
// 1) Declare a variable name and assign you name to it
var myName = 'Kirby';
console.log('1. Declare a variable name and assign you name to it');
console.log('Name:', myName);
// 2) Declare variables of different data types (string, number, boolean) and assign values
var gameTitle = 'Super Smash Bros.';
var playerCount = 4;
var isMultiplayer = true;
console.log('2. Declare variables of different data types (string, number, boolean) and assign values');
console.log('Game Title:', gameTitle, '| Player Count:', playerCount, '| Is Multiplayer:', isMultiplayer);
// 3) Create an array of numbers and an array of strings and print them
var positionNumbers = [1, 2, 3, 4];
var positionNames = ['First', 'Second', 'Third', 'Forth'];
console.log('3. Create an array of numbers and an array of strings and print them');
console.log('Position Numbers:', positionNumbers);
console.log('Position Names:', positionNames);
// 4) Create a tuple of numbers and strings and print it
var playerStatus = ['Restless-Rusty', 4, 'Yoshi', 1];
console.log('\n4. Create a tuple of numbers and strings and print it');
console.log("".concat(playerStatus[0], " started in position ").concat(playerStatus[1], " with ").concat(playerStatus[2], " and Finished in position ").concat(playerStatus[3]));
console.log('Player Status:', playerStatus);
var ScoreCalculator = /** @class */ (function () {
    function ScoreCalculator() {
    }
    ScoreCalculator.prototype.add = function (lapsTotal, lapsLead) {
        return lapsTotal + lapsLead;
    };
    return ScoreCalculator;
}());
console.log('5. Create an interface for addition of two numbers and implement it');
var lapsTotal = 15;
var lapsLead = 5;
var scoreCalculator = new ScoreCalculator();
var totalScore = scoreCalculator.add(lapsTotal, lapsLead);
console.log("".concat(playerStatus[0], " survived ").concat(lapsTotal, " Laps and Lead ").concat(lapsLead, " Laps. Total Score: ").concat(lapsTotal, " + ").concat(lapsLead, " = ").concat(totalScore));
