// Leading Substrings
// Write a function that takes a string argument, and returns a list of all substrings 
// that start from the beginning of the string, ordered from shortest to longest.

// Examples:

console.log(substringsAtStart('abc'));      // ["a", "ab", "abc"]
console.log(substringsAtStart('a'));        // ["a"]
console.log(substringsAtStart('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

// input: string
// output: a new array, containing all substrings of string
// algo:
//   - create a new array result = []
//   - iterate thru the string
//     - get the substring from index 0 to index 1, 2 ...
//   - return the result
 
// both are my solutions 
function substringsAtStart(string) {
  let result = [];
  string.split('').forEach((_, idx) => {
    result.push(string.slice(0, idx + 1));
  });
  
  return result;
}

// then I try map for shorter syntax
function substringsAtStart(string) {
  return string.split('').map((_, idx) => string.slice(0, idx + 1));
}
