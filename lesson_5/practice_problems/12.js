// Given the following data structure, use a combination of methods, including filter, 
// to return a new array identical in structure to the original, but containing only the numbers that are multiples of 3.

// algo:
// - iterate thru outer arr
//   - for each subarray, if the number is the multiple of 3, keep it
//   - otherwise, next
// - return a new array

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let newArr = arr.map(subarray => {
  return subarray.filter(num => {
    if (num % 3 === 0) {
      return num;
    }
  });
});

console.log(newArr);
// => [ [], [ 3 ], [ 9 ], [ 15, 18 ] ]

// --- ls sol ---
arr.map(subarray => {
  return subarray.filter(num => num % 3 === 0); // one-line statement
});
