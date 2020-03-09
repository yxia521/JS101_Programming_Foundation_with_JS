// Sum or Product of Consecutive Integers
// Write a program that asks the user to enter an integer greater than 0, then asks whether the user 
// wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

// Examples:

// Please enter an integer greater than 0: 5
// Enter "s" to compute the sum, or "p" to compute the product. s

// The sum of the integers between 1 and 5 is 15.
// Please enter an integer greater than 0: 6
// Enter "s" to compute the sum, or "p" to compute the product. p

// The product of the integers between 1 and 6 is 720.

let readline = require('readline-sync');

let num = parseInt(readline.question('Please enter an integer greater than 0: '), 10);
let answer = readline.question('Enter "s" to compute the sum, or "p" to compute the product: ');

let sum = [...Array(num).keys()].map(x => ++x).reduce((acc, num) => acc + num);
let product = [...Array(num).keys()].map(x => ++x).reduce((acc, num) => acc * num, 1);

if (answer === 'p') {
  console.log(`The product of the integers between 1 and ${num} is ${product}.`);
} else if (answer === 's') {
  console.log(`The sum of the integers between 1 and ${num} is ${sum}.`);
} else {
  console.log('Oops. Unknown operation.')
}
