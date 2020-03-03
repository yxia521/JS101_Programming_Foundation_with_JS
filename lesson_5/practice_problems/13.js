// Given the following data structure, sort the array so that the sub-arrays are ordered based on the sum of the odd numbers that they contain.

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

// Since 1 + 3 < 1 + 7 < 1 + 5 + 3, the sorted array should look like this:

// [ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]

// 1)
let sortedArr = arr.sort((a, b) => {
  let sumOfOddA = 0;
  a.forEach(num => {
    if (num % 2 === 1) sumOfOddA += num;
  });
  let sumOfOddB = 0;
  b.forEach(num => {
    if (num % 2 === 1) sumOfOddB += num;
  });

  return sumOfOddA - sumOfOddB;
});

// 2): also ls sol
let sortedArr = arr.sort((a, b) => {
  let sumOfOddA = a.filter(num => num % 2 === 1).reduce((acc, num) => acc + num);
  let sumOfOddB = b.filter(num => num % 2 === 1).reduce((acc, num) => acc + num);
  return sumOfOddA - sumOfOddB;
});

console.log(sortedArr);

// When you want to use conditionals within reduce, use filter first to get
// the element you need, then use reduce
