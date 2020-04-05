// Sum of Sums
// Write a function that takes an array of numbers, and returns the sum of the sums of each leading subsequence 
// for that array. You may assume that the array always contains at least one number.

// Examples:

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35

// algo:
//   - function get all sub leading arrays
//     - iterate from index 0, the end index increment by 1
//     - return a array containing all sub arrays
  
//   - function get sum of this top array
//     - reduce

function allLeadingArr(list) {
  let result = [];
  list.forEach((_, idx) => {
    result = result.concat(list.slice(0, idx + 1)); // instead of returning nested array, we return a flatten array
  });
  
  return result;
}

function sumOfSums(arr) {
  return allLeadingArr(arr).reduce((accum, num) => accum + num);
}

// ls sol
function sumOfSums(numbers) {
  return numbers
    .map((_, idx) =>
      numbers.slice(0, idx + 1).reduce((sum, value) => sum + value)
    )
    .reduce((sum, value) => sum + value);
}
