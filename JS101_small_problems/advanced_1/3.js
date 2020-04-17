// Transpose MxN Matrix
// In the previous exercise, you wrote a function that transposed a 3x3 matrix 
// represented by an array of arrays.

// Matrix transposes are not limited to 3x3 matrices, or even square matrices. 
// Any matrix can be transposed simply by switching columns with rows.

// Modify your transpose function from the previous exercise so that it works 
// with any MxN matrix with at least one row and one column.

// Examples:

const matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
console.log(matrix);         // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]

function transpose(arr) {
  let result = [];
  
  for (let outerIdx = 0; outerIdx < arr[0].length; outerIdx++) {
    let eachGroup = []; // a temporary holder to store each inner array needs to be put in result
    
    for (let innerIdx = 0; innerIdx < arr.length; innerIdx++) {
      eachGroup.push(arr[innerIdx][outerIdx]);
    }
    
    result = result.concat([eachGroup]); // interest: how to concat nested array without losing []
  }
  
  return result;
}
