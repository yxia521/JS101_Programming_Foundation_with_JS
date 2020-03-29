// Palindromic Numbers
// Write a function that returns true if its integer argument is palindromic, or false otherwise. 
// A palindromic number reads the same forwards and backwards.

// Examples:

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true

function isPalindrome(string) {
  return string.split('').reverse().join('') === string;
}

function isPalindromicNumber(num) {
  return isPalindrome(String(num));
}

// Further Exploration
// Suppose the number argument begins with one or more 0s. Will the solution still work? 
// Why or why not? Is there any way to address this?

// When passing a number with leading zero to as an argument to a function, JS will transform it into an octal. 
// Number.prototype.toString(8) to turn the octal into the original number.
function isPalindromicNumber(num) {
  let cleanNum = num.toString(8);
  return isPalindrome(cleanNum);
}
console.log(isPalindromicNumber(00034543));  // true
console.log(isPalindromicNumber(0022));      // true
console.log(isPalindromicNumber(005));       // true
