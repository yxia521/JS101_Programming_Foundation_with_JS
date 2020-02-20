// Ask the user for two numbers.
// Ask the user for operation to perform: add, subtract, multiply or divide.
// Perform the calculation and display the result.

// ask the user for 1st number and get this number
// ask the user for 2nd number and get this number
// ask the user what operation to perform and get this info
// if this info is equal to one of the switch cases, perform correspondingly.
// print the result

const readline = require('readline-sync');
let answer;
const MSG = require('./calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function isinvalidNumber(number) {
  return Number.isNaN(Number(number)) || number.trimStart() === '';
}

prompt(MSG.welcome);

do {
  prompt(MSG.firstNumber);
  let number1 = readline.question();

  while (isinvalidNumber(number1)) {
    prompt(MSG.isinvalidNumber);
    number1 =  readline.question();
  }

  prompt(MSG.secondNumber);
  let number2 = readline.question();

  while (isinvalidNumber(number1)) {
    prompt(MSG.invalidNumber);
    number1 =  readline.question();
  }

  prompt(MSG.enterOperation);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MSG.invalidChoose);
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
  if (Number(number2) === 0 && operation === '4') {
    prompt(MSG.invalidCalculation);
  } else {
    prompt(`The result is ${output}.`);
  }
  prompt(MSG.playAgain);
  answer = readline.question();
} while (['Y', 'y'].includes(answer));
