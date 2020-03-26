// ddaaiillyy ddoouubbllee
// Write a function that takes a string argument and returns a new string that contains the value 
// of the original string with all CONSECUTIVE duplicate characters collapsed into a single character.

// Examples:

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""

// algo
//   - create an empty new string
//   - iterate thru the string
//     - if current char === next char, skip
//     - else put the current char to the new string
//   - return the new string
    
function crunch(string) {
  let result = '';
  for (let index = 0; index < string.length; index++) {
    if (string[index] === string[index + 1]) continue; // tricky part
    result += string[index];
  }
  return result;
}

// ls sol: basically same logic
function crunch(text) {
  let index = 0;
  let crunchText = '';

  while (index <= text.length - 1) {
    if (text[index] !== text[index + 1]) { // differ
      crunchText += text[index];
    }

    index += 1;
  }

  return crunchText;
}

// so another version of mine accordingly
function crunch(string) {
  let result = '';
  for (let index = 0; index < string.length; index++) {
    if (string[index] !== string[index + 1]) result += string[index]; // not equal
  }
  return result;
}

