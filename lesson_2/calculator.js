// Ask the user for two numbers.
// Ask the user for the type of operation to perform: add, subtract, multiply or divide.
// Perform the calculation and display the result.

// ask the user for 1st number and get this number 
// ask the user for 2nd number and get this number 
// ask the user what operation to perform and get this info
// if this info is equal to one of the switch cases, 
// perform correspondingly.
// print the result

const readline = require('readline-sync');

console.log('Welcome to Calculator!');
console.log("What's the first number?");
let number1 = readline.question();

console.log(number1);

console.log("What's the second number?");
let number2 = readline.question();
console.log(number2);

console.log('What operation would you like to perform?\n1) Add 2) subtract 3) Multiply 4) Divide');
let operation = readline.question();
