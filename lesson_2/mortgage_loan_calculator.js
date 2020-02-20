// need three pieces of information from user:

// the loan amount
// the Annual Percentage Rate (APR)
// the loan duration

// you'll need to calculate the following two things:

// monthly interest rate
// loan duration in months

// the formula looks like this:
// let m = p * (j / (1 - Math.pow((1 + j),(-n))));
// m = monthly payment
// p = loan amount
// j = monthly interest rate
// n = loan duration in months

const readline = require('readline-sync');
const MESSAGE = require('./mortgage_loan_calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function getLoan() {
  prompt(MESSAGE.getLoan);
  return readline.question();
}

function getApr() {
  prompt(MESSAGE.getApr);
  return readline.question();
}

function getDuration() {
  prompt(MESSAGE.getDuration);
  return Number(readline.question());
}

function getMonthlyPayment(loanAmount, monthlyInterestRate, durationInMonths) {
  return loanAmount * (monthlyInterestRate /
    (1 - Math.pow((1 + monthlyInterestRate),(-durationInMonths))));
}

function isInvalidInput(number) { // here number is string
  return Number(number) <= 0 || number.includes(',') || Number.isNaN(Number(number)) || number.trimStart() === '';
}

let answer;

prompt(MESSAGE.welcome);
prompt(MESSAGE.line);
do {
  let loanAmount = getLoan();
  while (isInvalidInput(loanAmount)) {
    prompt(MESSAGE.invalidInput);
    loanAmount = readline.question();
  }

  let apr = getApr();
  while (isInvalidInput(apr)) {
    prompt(MESSAGE.invalidInput);
    apr = readline.question();
  }

  let durationInMonths = getDuration();
  let monthlyInterestRate = +(Number(apr) / 100 / 12);
  let monthlyPayment = getMonthlyPayment(Number(loanAmount),
    monthlyInterestRate, durationInMonths);
  prompt(`Your monthly payment is $${(monthlyPayment).toFixed(2)}.`);
  prompt(MESSAGE.playAgain);
  answer = readline.question();
} while (['Y', 'y'].includes(answer));
