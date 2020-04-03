// Sequence Count
// Create a function that takes two integers as arguments. The first argument is a count, and the second is the starting number of a sequence that your function will create. The function should return an array containing the same number of elements as the count argument. The value of each element should be a multiple of the starting number.

// You may assume that the count argument will always be an integer greater than or equal to 0. The starting number can be any integer. If the count is 0, the function should return an empty array.

// Examples:

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []

// input:
//   - first argu: count
//   - second argu: starting number
  
// algo:
//   - create a new array for result storing
//   - create a loop for multiplier
//   - for each iteration, multipler is 1, 2, 3, 4 until 
//     - and push (the start number * multiplier) to the array
//     - exit when the multiplier is equal to the count
//   - return the array
  

function sequence(count, startNum) {
  let result = [];
  for (let multiplier = 1; multiplier <= count ; multiplier += 1) {
   result.push(startNum * multiplier);
  }
  return result;
}
