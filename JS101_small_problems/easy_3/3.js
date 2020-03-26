// Stringy Strings
// Write a function that takes one argument, a positive integer, and returns 
// a string of alternating '1's and '0's, always starting with a '1'. 
// The length of the string should match the given integer.

// algo:
//   - if the number is even, logs "10" (number / 2) times
//   - else if the number is odd, logs "10" Math.floor(number / 2) times + '1'

const stringy = (number) => {
  if (number % 2 === 0) {
    console.log(`${"10".repeat(number / 2)}`);
  } else {
    console.log(`${"10".repeat(Math.floor(number / 2))}1`);
  }
};

// ls sol
function stringy(size) {
  let result = "";
  for (let idx = 0; idx < size; idx++) {
    let number = ((idx % 2) === 0) ? 1 : 0; // at idx 0, 0%2===0, pick 1; at idx 1, 1%2!==0, pick 0...
    result += number;
  }
  return result;
};

// Examples:
stringy(6);    // "101010";
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
