// Day 2 Assignment: TypeScript Basics
// 1) Declare a variable name and assign you name to it
let myName = 'Kirby';

console.log('1. Declare a variable name and assign you name to it');
console.log('Name:', myName);

// 2) Declare variables of different data types (string, number, boolean) and assign values
let gameTitle = 'Super Smash Bros.';
let playerCount = 4;
let isMultiplayer = true;

console.log('2. Declare variables of different data types (string, number, boolean) and assign values');
console.log('Game Title:', gameTitle, '| Player Count:', playerCount, '| Is Multiplayer:', isMultiplayer);

// 3) Create an array of numbers and an array of strings and print them
const positionNumbers = [1, 2, 3, 4];
const positionNames = ['First', 'Second', 'Third', 'Forth'];

console.log('3. Create an array of numbers and an array of strings and print them')
console.log('Position Numbers:', positionNumbers);
console.log('Position Names:', positionNames);

// 4) Create a tuple of numbers and strings and print it
const playerStatus: [playerName: string, startPosition: number, playerCharacter: string, finishPosition: number] = ['Restless-Rusty', 4, 'Yoshi', 1];

console.log('\n4. Create a tuple of numbers and strings and print it');
console.log(`${playerStatus[0]} started in position ${playerStatus[1]} with ${playerStatus[2]} and Finished in position ${playerStatus[3]}`);
console.log('Player Status:', playerStatus);

// 5) Create an interface for addition of two numbers and implement it

interface CalculateScore {
  add(lapsTotal: number, lapsLead: number): number;
}

class ScoreCalculator implements CalculateScore {
  add(lapsTotal: number, lapsLead: number): number {
    return lapsTotal + lapsLead;
  }
}

console.log('5. Create an interface for addition of two numbers and implement it');

const lapsTotal = 15;
const lapsLead = 5;

const scoreCalculator = new ScoreCalculator();
const totalScore = scoreCalculator.add(lapsTotal, lapsLead);
console.log(`${playerStatus[0]} survived ${lapsTotal} Laps and Lead ${lapsLead} Laps. Total Score: ${lapsTotal} + ${lapsLead} = ${totalScore}`);
