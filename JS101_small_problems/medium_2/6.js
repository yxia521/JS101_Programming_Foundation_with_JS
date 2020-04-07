// Sum Square - Square Sum
// Write a function that computes the difference between the square of the sum of the first count positive integers 
// and the sum of the squares of the first count positive integers.

// Examples:

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150

// input: integer
// output: number

// algo:
//   - build a range from 1 to number
//   - square of sum, get the sum of the range, then square it
//   - the sum of squares
//     - iterate the range, for each number, square it, then sum all thses products up
//   - return the difference 

function sumSquareDifference(num) {
  let range = [...Array(num).keys()].map(x => ++x);
  let squareOfSum = Math.pow((range.reduce((accum, num) => accum + num)), 2);
  let sumOfSquares = range.map(num => Math.pow(num, 2)).reduce((accum, num) => accum + num);
  
  return squareOfSum - sumOfSquares;
}

// ls sol
function sumSquareDifference(count) {
  let sum = 0;
  let sumOfSquares = 0;
  for (let number = 1; number <= count; number++) {
    sum += number;
    sumOfSquares += Math.pow(number, 2);
  }
  return Math.pow(sum, 2) - sumOfSquares;
}
