// List of Digits
// Write a function that takes one argument, a positive integer, and returns a list of the digits in the number.

// Examples:

digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]

function digitList(number) {
  let result = [];
  do {
    result.push(number % 10);
    number = Math.floor(number / 10);
  } while (number > 0);
  console.log(result.reverse());
}

// further exploration: use map
function digitList(number) {
  console.log(String(number).split('').map(char => Number(char))); // or parseInt(char, 10)
}
