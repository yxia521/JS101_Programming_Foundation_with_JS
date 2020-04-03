// Double Char (Part 1)
// Write a function that takes a string, doubles every character in the string, and returns the result as a new string.

// Examples:

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""

// algo:
//   - iterate thru the string
//     - for each char, repeat it twice
//   - return the new string

function repeater(string) {
  let repeatedStr = "";
  for (let idx = 0; idx < string.length; idx += 1) {
    repeatedStr += string[idx].repeat(2);
  }
  return repeatedStr;
}

// or
function repeater(string) {
  return string.split('').map(char => char.repeat(2)).join('')
}

// ls sol
function repeater(string) {
  return string.split("").map(char => char + char).join(""); // doesn't use repeat
}
