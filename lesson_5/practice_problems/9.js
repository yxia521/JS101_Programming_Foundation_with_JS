// Given the following data structure, return a new array with the same structure, 
// but with the subarrays ordered -- (alphabetically or numerically as appropriate -- in ascending order.

let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];
let sortedArr = arr.map(subarray => {
  return subarray.sort();
});

// Since the number subarray in this case is [2, 1, 3], we can write like above.
// But more accurately, you should use if condition to sort two data types seperately

let sortedArr = arr.map(subarray => {
  if (typeof subarray[0] === 'string') {
    return subarray.slice().sort(); // for string, sort sorts them alphabetically when there's no argument
  } else {
    return subarray.slice().sort((a, b) => a - b); // for number, sort converts them to strings, then compare
  }
})

console.log(sortedArr);
// => [ [ 'a', 'b', 'c' ], [ 1, 2, 3 ], [ 'black', 'blue', 'green' ] ]

// use slice here is because sort is destructive, we don't want to mutate the original
