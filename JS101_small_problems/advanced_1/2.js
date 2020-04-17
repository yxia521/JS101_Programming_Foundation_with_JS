// Transpose 3x3 Matrix

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

// input:
//   - 3 by 3 nested array
// output:
//   - 3 by 3 nested array
//     - row / column switched
// rule:
//   - leave the original unchanged
  
// algo:
//   - iterate thru the outer array
//     - for each subarray, iterate thru each number
//       - for each number
//         - pick out the 1st el as a new group
//         - pick out the 2nd el as a new group
//         - ... 3rd el
//       - end loop
//     - end loop
//   - return the new nested array

// tricky part:
// the order of innerIdx and outerIdx
// arr[][]:
// 1) fix the second [] as 0, iterate the first arr[] from 0 thru 2
// 2) the second [] increment to 1, iterate the first arr[] from 0 thru 2 again
// 3) the second [] increment to 2, iterate the first arr[] from 0 thru 2 again

function transpose(arr) {
  return arr.map((subarr, outerIdx) => subarr.map((num, innerIdx) => arr[innerIdx][outerIdx]));
}
