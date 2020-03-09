// ASCII String Value
// Write a function that determines and returns the ASCII string value of a string passed in as an argument. 
// The ASCII string value is the sum of the ASCII values of every character in the string. 
// (You may use String.prototype.charCodeAt() to determine the ASCII value of a character.)

function asciiValue(string) {
  if (string === '') return 0;
  return string.split('').map(char => char.charCodeAt()).reduce((acc, num) => acc + num);
}

console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0

// --- ls sol ---
function asciiValue(string) {
  let sum = 0;

  for (let idx = 0; idx < string.length; idx += 1) {
    sum += string.charCodeAt(idx);
  }

  return sum;
}
