// Rotation (Part 1)
// Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

// If the input is not an array, return undefined.
// If the input is an empty array, return an empty array.
// Review the test cases below, then implement the solution accordingly.

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]

// input: an array
// output: a new array, don't mutate the original

// algo:
//   - create a new array to store the result
//   - push the element from index 1 to the end to the new array, 
//   - the push the first elment of the original to the new array
//   - return this new array

function rotateArray(array) {
  let result = [];
  if (!array || !Array.isArray(array)) return undefined;
  if (array.length === 0) return [];
  
  result = result.concat(array.slice(1), array[0]);
  return result;
}

// ls sol: much shorter
function rotateArray(array) {
  if (!Array.isArray(array)) return undefined; // when no argu, undefined is given
  if (array.length === 0) return []; // empty array
  
  return array.slice(1).concat(array[0]);
}
