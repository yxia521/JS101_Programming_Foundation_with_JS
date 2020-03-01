// Create an object that expresses the frequency with which each letter occurs in this string:

let statement = "The Flintstones Rock";
// The output will look something like the following:

// { T: 1, h: 1, e: 2, F: 1, l: 1, ... }

// note: case-sensitive
// algo:
// - remove all spaces in the string
// - create an object to store the result, initialize it with every char, every value 0
// - iterate thru the string
//   - if the key includes this char, its value increments by 1
// - return the result

let allChars = statement.replace(/\s/g, "").split('');
let result = {};

allChars.forEach(char => {
  if (Object.keys(result).includes(char)) {
    result[char] += 1;
  } else {
    result[char] = 1;
  }
});
console.log(result);

// --- ls sol ---
let charsInStatement = statement.split('').filter(char => char !== ' '); // array without spaces
let result = {};

charsInStatement.forEach(char => {
  result[char] = result[char] || 0; // short-circuiting, SMART!
  result[char] += 1;
});

console.log(result);

// if a character doesn't exist as a key in our results object, 
// result[char] will return undefined — a falsy value — resulting in 
// the assignment of result[char] to 0. If result[char] instead evaluates to 
// a truthy value such as 1, it'll simply reassign the current value to result[char].


