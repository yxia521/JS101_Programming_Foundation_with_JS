// All Substrings
// Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. This means that all substrings that start at position 0 should come first, then all substrings that start at position 1, and so on. Since multiple substrings will occur at each position, return the substrings at a given position from shortest to longest.

// You may (and should) use the substringsAtStart function you wrote in the previous exercise:

// Example:

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]

function substringsAtStart(string) {
  return string.split('').map((_, idx) => string.slice(0, idx + 1));
}

function substrings(string) {
  let result = [];
  for (let idx = 0; idx < string.length; idx += 1) {
    result.push(substringsAtStart(string.slice(idx)));
  }
  return result.flat();
}

// try not to use flat(), and slice()
function substrings(string) {
  let result = [];
  for (let idx = 0; idx < string.length; idx += 1) {
    result = result.concat(substringsAtStart(string.substring(idx))); // use concat to merge two arrays
  }
  return result;
}
