// Searching 101
// Write a program that solicits six numbers from the user, then logs a message that 
// describes whether or not the sixth number appears amongst the first five numbers.

// Examples:

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 17

// The number 17 appears in 25,15,20,17,23.

// ------------------------

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 18

// The number 18 does not appear in 25,15,20,17,23.

const readline = require('readline-sync');
let numbers = [];

let firstNum = Number(readline.question('Enter the 1st number: '));
let secondNum = Number(readline.question('Enter the 2nd number: '));
let thirdNum = Number(readline.question('Enter the 3rd number: '));
let fourthNum = Number(readline.question('Enter the 4th number: '));
let fifthNum = Number(readline.question('Enter the 5th number: '));
let lastNum = Number(readline.question('Enter the last number: '));

numbers.push(firstNum, secondNum, thirdNum, fourthNum, fifthNum);

if (numbers.includes(lastNum)) {
  console.log(`The number ${lastNum} appears in ${numbers.join(', ')}.`);
} else {
  console.log(`The number ${lastNum} does not appear in ${numbers.join(', ')}.`);
}

// further exploration
console.log(numbers.some(num => num > 25)); // returns a boolean
