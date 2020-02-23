const readline = require("readline-sync");
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(choice, computerChoice) {
  if ((choice === 'rock' && computerChoice === 'scissors') ||
  (choice === 'paper' && computerChoice === 'rock') ||
  (choice === 'scissors' && computerChoice === 'paper')) {
    prompt('You win!');
  } else if ((computerChoice === 'scissors' && choice === 'paper') ||
    (computerChoice === 'rock' && choice === 'scissors') ||
    (computerChoice === 'paper' && choice === 'rock')) {
    prompt('Computer win!');
  } else {
    prompt("It's a tie!");
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
  prompt('("r" for "rock," "p" for "paper," "s" for "scissors")');
  let shortChoice = readline.question().toLowerCase();

  while (!['r', 'p', 's'].includes(shortChoice)) {
    prompt(`That's not a valid choice. Please enter "r", "p" or "s"`);
    shortChoice = readline.question().toLowerCase();
  }

  let playerChoice = expandLetter(shortChoice);
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${playerChoice}, computer chose ${computerChoice}.`);

  displayWinner(playerChoice, computerChoice);

  prompt('Do you want to play the game again? (y/n)');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  if (answer[0] === 'n') break;
}

  prompt('Thank you for playing. Bye!');
