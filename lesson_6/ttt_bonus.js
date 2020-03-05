const readline = require('readline-sync');

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const GRAND_WINNER = 5;
const WINNING_LINES = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]
  ];

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayBoard(board) {
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}.`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}  `);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}  `);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}  `);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))}):`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;
    
    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let square;

  // offense first (pick the winning move is top priority)
  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board, COMPUTER_MARKER);
    if (square) break;
  }
  
  // then defense
  if (!square) {
    for (let index = 0; index < WINNING_LINES.length; index++) {
      let line = WINNING_LINES[index];
      square = findAtRiskSquare(line, board, HUMAN_MARKER);
      if (square) break; // if truthy, there's only one unused square, computer must mark it
    }
  }

  if (board['5'] === INITIAL_MARKER) {
    square = '5';
  }

  // neither any lines have 2 human markers (should defense)
  // nor any lines have 2 computer markers (should offense)
  // square #5 is unavailable
  // computer just pick a random space to mark
  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }

  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

function joinOr(arr, delimiter = ', ', word = 'or') {
  switch (arr.length) {
    case 0:
      return '';
    case 1:
      return `${arr[0]}`;
    case 2:
      return arr.join(` ${word} `);
    default:
      return arr.slice(0, arr.length - 1).join(delimiter) +
       delimiter + `${word} ` + arr[arr.length - 1];
  }
}

function updateScore(board, score) {
  let winner = detectWinner(board);

  if (winner === 'Computer') {
    score.computer += 1;
  } else if (winner === 'Player') {
    score.player += 1;
  }
 
  return score;
}

function displayScore(score) {
  prompt(`Computer's score: ${score.computer}. Player's score: ${score.player}.`);
}

// computer defense & offense
function findAtRiskSquare(line, board, marker) {
  let markersInLine = line.map(square => board[square]); // marker

  // if exactly marks 2 squares
  if (markersInLine.filter(val => val === marker).length === 2) {
    let unusedSquare = line.find(square => board[square] === INITIAL_MARKER); // find returns the first el satisfying the callback
    if (unusedSquare !== undefined) { // if has exactly one INITIAL_MARKER, return that square, if no, find returns undefined
      return unusedSquare;
    }
  }

  return null;
}

// --------- main game -----------
prompt('Welcome to Tic Tac Toe.');
prompt('The first player scores 5 points is the grand winner!');
prompt('-----------------------------------------------------');

while (true) {
  let score = {computer: 0, player: 0};

  while (!Object.values(score).includes(GRAND_WINNER)) {
    let board = initializeBoard();

    while (true) {
      displayBoard(board);

      playerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;

      computerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;
    }
    
    displayBoard(board);

    if (someoneWon(board)) {
      prompt(`${detectWinner(board)} won!`);
      updateScore(board, score);
    } else {
      prompt("It's a tie!");
    }
    
    displayScore(score);
    prompt('---------------------------------------');
    console.log('');
  }

  if (score.computer === GRAND_WINNER) {
    prompt('Computer is the grand winner!');
  } else {
    prompt("Congrats! You're the grand winner!");
  }

  prompt('Play again? (y or n)');
  let answer = readline.question().toLowerCase()[0];
  if (answer !== 'y') break;
}

prompt('Thanks for playing Tic Tac Toe!');
