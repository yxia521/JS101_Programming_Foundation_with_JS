// When Will I Retire?
// Build a program that logs when the user will retire and how many more years the user has to work until retirement.

// Example:

// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!

const readline = require('readline-sync');

let currentAge = Number(readline.question('What is your age? '));
let retireAge = Number(readline.question('At what age would you like to retire? '));
let yearsToGo = retireAge - currentAge;

let today = new Date();
let year = today.getFullYear();

console.log(`It's ${year}. You will retire in ${year + yearsToGo}.`);
console.log(`You have only ${yearsToGo} years of work to go!`);
