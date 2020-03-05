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

function getRandomCard() {
  let card = [];
  let randomIndexOfValues = Math.floor(Math.random() * VALUES.length);
  let randomIndexOfSuits = Math.floor(Math.random() * SUITS.length);
  card.push(SUITS[randomIndexOfSuits], VALUES[randomIndexOfValues]);
  return card;
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

// ---------- main loop ----------
let playerCards = [];
let dealerCards = [];

// first pick 2 cards for player and dealer
for (let count = 1; count <= 2; count++) {
  playerCards.push(getRandomCard());
  dealerCards.push(getRandomCard());
}
console.log(playerCards);
console.log(dealerCards);
console.log(total(playerCards));
console.log(total(dealerCards));

while (true) {
  prompt('hit or stay? (h or s)');
  let answer = require.question().toLowerCase();
  if (['stay', 's'].includes(answer)) break;
}
