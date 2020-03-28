// Fibonacci Number Location By Length
// The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...) such that 
// the first two numbers are 1 by definition, and each subsequent number is the sum of 
// the two previous numbers. This series appears throughout the natural world.

// Computationally, the Fibonacci series is a simple series, but the results grow at an 
// incredibly rapid rate. For example, the 100th Fibonacci number is 354,224,848,179,261,915,075
// —that's enormous, especially considering that it takes six iterations just to find the first 
// 2-digit Fibonacci number.

// Write a function that calculates and returns the index of the first Fibonacci number that 
// has the number of digits specified by the argument. (The first Fibonacci number has an index of 1.)

// You may assume that the argument is always an integer greater than or equal to 2.

// Examples:

console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16));      // 74

// Don't try any higher values until you read the solution Discussion

function findFibonacciIndexByLength(length) {
  let first = 1;
  let second = 1;
  let index = 2;
  let fibonacci; 
  
  do {
    fibonacci = first + second;
    index += 1;
    
    first = second;
    second = fibonacci;
  } while (String(fibonacci).length < length)
  
  return index;
}
