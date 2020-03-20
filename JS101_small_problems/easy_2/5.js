// Arithmetic Integer
// Write a program that prompts the user for two positive integers, and then prints the results of the following 
// operations on those two numbers: addition, subtraction, product, quotient, remainder, and power. 
// Do not worry about validating the input.

// Example

// ==> Enter the first number:
// 23
// ==> Enter the second number:
// 17
// ==> 23 + 17 = 40
// ==> 23 - 17 = 6
// ==> 23 * 17 = 391
// ==> 23 / 17 = 1
// ==> 23 % 17 = 6
// ==> 23 ** 17 = 141050039560662968926103

const readline = require('readline-sync');
let firstNum = Number(readline.question('==> Enter the first number:\n'));
let secondNum = Number(readline.question('==> Enter the second number:\n'));
console.log(`==> ${firstNum} + ${secondNum} = ${firstNum + secondNum}`);
console.log(`==> ${firstNum} - ${secondNum} = ${firstNum - secondNum}`);
console.log(`==> ${firstNum} * ${secondNum} = ${firstNum * secondNum}`);
console.log(`==> ${firstNum} / ${secondNum} = ${parseInt((firstNum / secondNum), 10)}`);
console.log(`==> ${firstNum} % ${secondNum} = ${firstNum % secondNum}`);
console.log(`==> ${firstNum} ** ${secondNum} = ${Math.pow(firstNum, secondNum)}`);
