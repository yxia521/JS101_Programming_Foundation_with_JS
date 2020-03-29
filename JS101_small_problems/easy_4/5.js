// Palindromic Strings (Part 2)
// Write another function that returns true if the string passed as an argument is a palindrome, 
// or false otherwise. This time, however, your function should be case-insensitive, 
// and should ignore all non-alphanumeric characters. If you wish, 
// you may simplify things by calling the isPalindrome function you wrote in the previous exercise.

// Examples:

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false

function isPalindrome(string) {
  return string.split('').reverse().join('') === string;
}

function isRealPalindrome(string) {
  let cleanString = string.toLowerCase().replace(/[^a-z0-9]/g, '');
  // console.log(cleanString); only for checking what's the cleanString
  return isPalindrome(cleanString);
}
