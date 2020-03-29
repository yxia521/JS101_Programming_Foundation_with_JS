// Running Totals
// Write a function that takes an array of numbers, and returns an array with 
// the same number of elements, with each element's value being the running 
// total from the original array.

// Examples:

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []

// iterate thru the array
//   - index 0: the sum of first 1
//   - index 1: the sum of first 2
//   ...
// return this array

function runningTotal(array) {
  let result = [];

  for (let idx = 1; idx <= array.length; idx += 1) {
    result.push(array.slice(0, idx).reduce((num, acc) => acc + num));
  }
  return result;
}

// ls sol
function runningTotal(array) {
  let resultArray = [];
  let sum = 0;

  for (let idx = 0; idx < array.length; idx += 1) {
    resultArray.push((sum += array[idx]));
  }

  return resultArray;
};

// Further Exploration
// Can you rewrite the solution using the Array.prototype.map method? 
function runningTotal(array) {
  let sum = 0;
  return array.map(num => sum += num);
}
