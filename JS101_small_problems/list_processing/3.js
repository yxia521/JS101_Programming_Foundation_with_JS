// Multiply All Pairs
// Write a function that takes two array arguments, each containing a list of numbers, 
// and returns a new array containing the products of all combinations of number pairs 
// that exist between the two arrays. The returned array should be sorted in ascending numerical order.

// You may assume that neither argument will be an empty array.

// Example:

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]

// input: 2 arrays
// output: a new array, containing all the possible products
// algo:
//   - iterate thru arr1
//     - for each number, multiply all numbers one by one by iterating thru arr2 
//   - return the array
  
function multiplyAllPairs(arr1, arr2) {
 return arr1.map(num1 => {
    return arr2.map(num2 => num1 * num2);
  }) // before flat, we get [ [ 8, 6, 2, 4 ], [ 16, 12, 4, 8 ] ]
   .flat()
   .sort((a, b) => a - b);
}

// ls sol
function multiplyAllPairs(arr1, arr2) {
  let result = [];
  arr1.forEach(item1 => {
    arr2.forEach(item2 => {
      result.push(item1 * item2);
    });
  });
  
  return result.sort((a, b) => a - b);      
}
