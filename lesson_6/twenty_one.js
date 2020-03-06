// -------------------------------
// Card               | Value
// 2 - 10             | face value
// jack, queen, king  | 10
// ace                | 1 or 11
// ------------------------------- 

// 4 suits: Hearts, Diamonds, Clubs, Spades

// algo:
// 1. initialize deck
// 2. deal cards to player and dealer
// 3. player turn: hit or stay
//   - repeat until bust or stay
// 4. if player bust, dealer wins
// 5. dealer turn: hit or stay
//   - repeat until total >= 17
// 6. if dealer busts, player wins
// 7. compare cards and declare winner

// let deck = {value: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'] , suits: ["Hearts", "Diamonds", "Clubs", "Spades"]}
// Object.values(deck);
const readline = require('readline-sync');

const VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const SUITS = [ 'H', 'D', 'C', 'S' ];

function prompt(message) {
  console.log(`=> ${message}`);
}

// shuffle on array
function shuffle(array) {
  for (let first = array.length - 1; first > 0; first--) {
    let second = Math.floor(Math.random() * (first + 1)); // 0 to first
    [array[first], array[second]] = [array[second], array[first]]; // swap elements
  }

  return array;
}

function initializeDeck() {
  let deck = [];

  for (let suitIndex = 0; suitIndex < SUITS.length; suitIndex++) {
    for (let valueIndex = 0; valueIndex < VALUES.length; valueIndex++) {
      deck.push([SUITS[suitIndex], VALUES[valueIndex]]);
    }
  }

  return shuffle(deck);
}

// cards will look like [ [ 'S', '6' ], [ 'D', '10' ] ...]
function total(cards) {
  let values = cards.map(card => card[1]); // ['6', '10'...]

  let sum = 0;
  values.forEach(value => {
    if (value === 'A') {
      sum += 11;
    } else if (['J', 'Q', 'K'].includes(value)) { // 'J', 'Q', 'K'
      sum += 10;
    } else {
      sum += Number(value); // '2' - '10'
    }
  });

  // correct for A
  values.filter(value => value === 'A').forEach(_ => { // ['A', 'A', ...]
    if (sum > 21) sum -= 10;
  });

  return sum;
}

function busted(cards) {
  return total(cards) > 21;
}

function detectResult(dealerCards, playerCards) {
  let playerTotal = total(playerCards);
  let dealerTotal = total(dealerCards);

  if (playerTotal > 21) {
    return 'PLAYER_BUSTED';
  } else if (dealerTotal > 21) {
    return 'DEALER_BUSTED';
  } else if (dealerTotal < playerTotal) {
    return 'PLAYER';
  } else if (dealerTotal > playerTotal) {
    return 'DEALER';
  } else {
    return 'TIE';
  }
}

function displayResults(dealerCards, playerCards) {
  let result = detectResult(dealerCards, playerCards);

  switch (result) {
    case 'PLAYER_BUSTED':
      prompt('You busted! Dealer wins!');
      break;
    case 'DEALER_BUSTED':
      prompt('Dealer busted! You win!');
      break;
    case 'PLAYER':
      prompt('You win!');
      break;
    case 'DEALER':
      prompt('Dealer wins!');
      break;
    case 'TIE':
      prompt("It's a tie!");
  }
}

function playAgain() {
  console.log('---------------');
  prompt('Would you like to play again? (y or n)');
  let answer = readline.question().toLowerCase();
  return answer[0] === 'y';
}

// pick up 2 cards for player and dealer, a nested array with 2 subarrays
function popTwoFromDeck(deck) {
  return [deck.pop(), deck.pop()];
}

// make the format look better
function hand(cards) {
  return cards.map(card => `${card[1]}${card[0]}`).join(' ');
}

// ---------- main loop ----------
while (true) {
  prompt('Welcome to Twenty-One!');

  let playerCards = [];
  let dealerCards = [];
  let deck = initializeDeck();

  // first pick 2 cards for player and dealer, push a nested arr with 2 subarr, use spread syntax
  playerCards.push(...popTwoFromDeck(deck));
  dealerCards.push(...popTwoFromDeck(deck));

  prompt(`Dealer has [${dealerCards[0]}] and ?`);
  prompt(`You have [${playerCards[0]}] and [${playerCards[1]}], for a total of: ${total(playerCards)}.`);

  // player turn
  while (true) {
    let playerTurn;
    while (true) {
      prompt('Would you like to (h)it or (s)tay?');
      playerTurn = readline.question().toLowerCase();
      if (['h', 's'].includes(playerTurn)) break;
      prompt("Sorry, that's not valid input. Please enter 'h' or 's'.");
    }

    if (playerTurn === 'h') {
      playerCards.push(deck.pop());
      prompt('You chose to hit!');
      prompt(`Your cards are now: ${hand(playerCards)}`);
      prompt(`Your total is now: ${total(playerCards)}`);
    }

    if (playerTurn === 's' || busted(playerCards)) break;
  } 

  if (busted(playerCards)) {
    displayResults(dealerCards, playerCards);
    if (playAgain()) {
      continue;
    } else {
      break;
    } 
  } else {
    prompt(`You stayed at ${total(playerCards)}.`);
  }

  // dealer turn
  prompt('Dealer turn...');

  while (total(dealerCards) < 17) {
    prompt('Dealer hits!');
    dealerCards.push(deck.pop());
    prompt(`Dealer's cards are now: ${hand(dealerCards)}.`);
  }

  if (busted(dealerCards)) {
    prompt(`Dealer's total is now: ${total(dealerCards)}.`);
    displayResults(dealerCards, playerCards);
    if (playAgain()) {
      continue;
    } else {
      break;
    }
  } else {
    prompt(`Dealer stays at ${total(dealerCards)}.`);
  }
  
  // both choose to stay - compare the results
  console.log('-------------------------------------');
  prompt(`Dealer has ${dealerCards}, for a total of ${total(dealerCards)}`);
  prompt(`Player has ${playerCards}, for a total of ${total(playerCards)}`);
  console.log('-------------------------------------');

  displayResults(dealerCards, playerCards);

  if (!playAgain()) break;
}
