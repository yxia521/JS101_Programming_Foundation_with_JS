// Get The Middle Character
// Write a function that takes a non-empty string argument, and returns the middle character(s) of the string. 
// If the string has an odd length, you should return exactly one character. If the string has an even length, 
// you should return exactly two characters.

// Examples:

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"

// algo:
//   - if the string.length is odd, return the middle one
//   - if the string.length is even, return the middle one + next one

function centerOf(string) {
  let middleChar = Math.floor(string.length / 2);
  if (string.length % 2 !== 0) {
    return string[middleChar];
  } else {
    return string[middleChar - 1] + string[middleChar];
  }
}

// shorter
function centerOf(string) {
  let middleChar = Math.floor(string.length / 2);
  return string.length % 2 !== 0 ? string[middleChar] : string[middleChar - 1] + string[middleChar];
}
