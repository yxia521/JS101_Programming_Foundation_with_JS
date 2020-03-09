// Tip Calculator
// Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. 
// The program must compute the tip, and then log both the tip and the total amount of the bill to the console. 
// You can ignore input validation and assume that the user will enter numbers.

// Example:

// What is the bill? 200
// What is the tip percentage? 15

// The tip is $30.00
// The total is $230.00

let readline = require('readline-sync');

let billAmount = parseFloat(readline.question('What is the bill?\n'));
let tipPercentage = parseFloat(readline.question('What is the tip percentage?\n'));

let tip = (billAmount * (tipPercentage / 100));
let total = (tip + billAmount).toFixed(2);

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total}`);
