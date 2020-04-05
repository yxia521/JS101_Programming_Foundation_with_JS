// Sum Of Digits
// Write a function that takes one argument, a positive integer, and returns the sum of its digits. 
// Do this using list processing techniques.

// Examples:

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45

// algo:
//   - convert the number to string
//     - split them digit by digit to an array
//       - iterate thru, sum each num by Number(num)
//   - return the sum

function sum(number) {
  return String(number).split('').reduce((acc, num) => Number(acc) + Number(num));
}

// ls sol
function sum(number) {
  return String(number)
  .split('')
  .reduce((accum, num) => accum + Number(num), 0);
}
