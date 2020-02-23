const MESSAGES = require("./rock_paper_scissors.json");
const readline = require("readline-sync");
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(choice, computerChoice) {
  if ((choice === 'rock' && computerChoice === 'scissors') ||
  (choice === 'paper' && computerChoice === 'rock') ||
  (choice === 'scissors' && computerChoice === 'paper')) {
    prompt(MESSAGES.playerWin);
  } else if ((computerChoice === 'scissors' && choice === 'paper') ||
    (computerChoice === 'rock' && choice === 'scissors') ||
    (computerChoice === 'paper' && choice === 'rock')) {
    prompt(MESSAGES.computerWin);
  } else {
    prompt(MESSAGES.tie);
  }
}

function expandLetter(choice) {
  switch (choice) {
    case 'r':
      return 'rock';
    case 'p':
      return 'paper';
    case 's':
      return 'scissors';
    default:
      return choice;
  }
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  prompt(MESSAGES.shortLetterRemainder);
  let shortChoice = readline.question().toLowerCase();

  while (!['r', 'p', 's'].includes(shortChoice)) {
    prompt(MESSAGES.invalidChoice);
    shortChoice = readline.question().toLowerCase();
  }

  let playerChoice = expandLetter(shortChoice);
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${playerChoice}, computer chose ${computerChoice}.`);

  displayWinner(playerChoice, computerChoice);

  prompt(MESSAGES.playAgain);
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt(MESSAGES.invalidAnswer);
    answer = readline.question().toLowerCase();
  }
  if (answer[0] === 'n') break;
}

  prompt(MESSAGES.thankYou);
