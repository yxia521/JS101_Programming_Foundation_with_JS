// Rotating Matrix
// As we saw in the previous exercises, a matrix can be represented by an array of arrays. 
// For example, the 3x3 matrix shown below:

// 1  5  8
// 4  7  2
// 3  9  6
// is represented by the following array of arrays:

// let matrix = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6],
// ];
// A 90-degree rotation of a matrix produces a new matrix in which each side of the matrix 
// is rotated clockwise by 90 degrees. For example, the 90-degree rotation of the matrix shown above is:

// 3  4  1
// 9  7  5
// 6  2  8
// A 90-degree rotation of a non-square matrix is similar. For example, given the following matrix:

// 3  4  1
// 9  7  5
// its 90-degree rotation is:

// 9  3
// 7  4
// 5  1
// Write a function that takes an arbitrary MxN matrix, rotates it clockwise by 90-degrees as described above, 
// and returns the result as a new matrix. The function should not mutate the original matrix.

// Examples:

let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]

// rules: (rotate 90 degress towards left)
//   - all 1st row => last column
//   - rest of them, change correspondingly
//   - all last row => first column
  
// algo:
//   - iterate thru outer array, from the last subarray thru the first
//     - for number of inner subarrays, iterate, from the first to the last number
//   - for dealing with nested result, the same as previous questions

function rotate90(matrix) {
  let result = [];
  
  for (let innerIdx = 0; innerIdx < matrix[0].length; innerIdx++) {
    
    let eachGroup = [];
    
    for (let outerIdx = matrix.length - 1; outerIdx >=0; outerIdx--) {
      eachGroup.push(matrix[outerIdx][innerIdx]);
    }
    
    result = result.concat([eachGroup]);
  }
  
  return result;
}
