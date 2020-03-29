// Halvsies
// Write a function that takes an array as an argument, and returns an array that 
// contains two elements, each of which is an array. Put the first half of the 
// original array elements in the first element of the return value, and put 
// the second half in the second element. If the original array contains an odd 
// number of elements, place the middle element in the first half array.

// Examples:

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]

// algo:
//   - if the array length is even, put the first half to an array, the second half to another
//     - century index: length / 2
//   - else odd
//     - century index: Math.ceil(length / 2)

function halvsies(arr) {
  let result = [];
  let center;
  if (arr.length % 2 === 0) {
    center = arr.length / 2;
    result.push(arr.slice(0, center), arr.slice(center));
  } else {
    center = Math.ceil(arr.length / 2);
    result.push(arr.slice(0, center), arr.slice(center));
  }
  return result;
}

// ls sol
function halvsies(array) {
  let half = Math.ceil(array.length / 2); // when argument is integer, this returns integer itself
  let firstHalf = array.slice(0, half);
  let secondHalf = array.slice(half);
  return [firstHalf, secondHalf];
}
