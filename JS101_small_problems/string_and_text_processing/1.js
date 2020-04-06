// Uppercase Check
// Write a function that takes a string argument, and returns true if all of the alphabetic characters 
// inside the string are uppercase; false otherwise. Ignore characters that are not alphabetic.

// Examples:
console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true

// algo:
//   - call match on the string to check
//    - if includes any lower case letter, return false
//    - else return true

function isUppercase(string) {
  return !string.match(/[a-z]/);
}

// ls sol
function isUppercase(string) {
  return !/[a-z]/.test(string);
}
