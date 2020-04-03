// Counting Up
// Write a function that takes an integer argument, and returns an array containing 
// all integers between 1 and the argument (inclusive), in ascending order.

// You may assume that the argument will always be a positive integer.

// Examples:

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]

// algo: 
//   - use a loop to iterate thru the list from 1...number
//   - push each number to a new array
//   - return this array
  
function sequence(number) {
  let arr = [];
  for (let count = 1; count <= number; count += 1) {
    arr.push(count);
  }
  return arr;
}

// further exploration: use map
function sequence(number) {
  return [...Array(number).keys()].map(i => ++i); // recall this method to create a range
}
