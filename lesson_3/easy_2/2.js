// The Array.prototype.reverse method reverses the order of elements in an array,
// and Array.prototype.sort can rearrange the elements in a variety of ways, including descending.
// Both of these methods mutate the original array as shown below. Write two distinct ways of
// reversing the array without mutating the original array. Use reverse for the first solution,
// and sort for the second.

// 1)
let numbers = [1, 2, 3, 4, 5];
numbers.reverse();    // mutates original
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

let reversedArray = numbers.slice().reverse(); // the equivalent of creating a copied array
console.log(reversedArray);

// 2)
numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1); // mutates original
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// Bonus 1: Can you do it using the Array.prototype.forEach() method?
let descendingArr = [];
numbers.forEach(number => descendingArr.unshift(number));

console.log(descendingArr); // [ 5, 4, 3, 2, 1 ]
console.log(numbers);       // [ 1, 2, 3, 4, 5 ]

// Bonus 2: Can you do it using the Array.prototype.reduce() method?
let reversedArray = numbers.reduce((acc, num) => ([num, ...acc]), []);
console.log(reversedArray); // [ 5, 4, 3, 2, 1 ]
