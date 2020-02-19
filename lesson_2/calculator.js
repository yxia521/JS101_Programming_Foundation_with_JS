// Ask the user for two numbers.
// Ask the user for operation to perform: add, subtract, multiply or divide.
// Perform the calculation and display the result.

// ask the user for 1st number and get this number
// ask the user for 2nd number and get this number
// ask the user what operation to perform and get this info
// if this info is equal to one of the switch cases,
// perform correspondingly.
// print the result

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return Number.isNaN(Number(number)) || number.trimStart() === '';
}

prompt('Welcome to Calculator!');
prompt("What's the first number?");
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt("Hmm... that doesn't look like a valid number. Try again: ");
  number1 =  readline.question();
}

prompt("What's the second number?");
let number2 = readline.question();

while (invalidNumber(number1)) {
  prompt("Hmm... that doesn't look like a valid number. Try again: ");
  number1 =  readline.question();
}

prompt('What operation would you like to perform?\n1) Add 2) subtract 3) Multiply 4) Divide');
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt("Must choose 1, 2, 3 or 4. Try again:");
  operation = readline.question();
}

let output;
switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) / Number(number2);
    break;
}

prompt(`The result is ${output}.`);
