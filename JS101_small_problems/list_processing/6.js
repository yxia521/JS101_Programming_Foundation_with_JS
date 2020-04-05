// Palindromic Substrings
// Write a function that returns a list of all palindromic substrings of a string. That is, each substring must consist of a sequence of characters that reads the same forward and backward. The substrings in the returned list should be sorted by their order of appearance in the input string. Duplicate substrings should be included multiple times.

// You may (and should) use the substrings function you wrote in the previous exercise.

// For the purpose of this exercise, you should consider all characters and pay attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. In addition, assume that single characters are not palindromes.

// Examples:

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

// find a substring from start index
function substringsAtStart(string) {
  return string.split('').map((_, idx) => string.slice(0, idx + 1));
}

// find all substrings
function substrings(string) {
  let result = [];
  for (let idx = 0; idx < string.length; idx += 1) {
    result = result.concat(substringsAtStart(string.substring(idx))); 
  }
  return result;
}

// ----------- Q6 -------------

// determine if it's palindrome
function isPalindromes(string) {
  return string.split('').reverse().join('') === string && string.length > 1;
}

// find all substrings which are palindromes
function palindromes(string) {
  return substrings(string).filter(substring => {
    if (isPalindromes(substring)) {
      return substring;
    }
  });
}

// ls sol
function palindromes(string) {
  return substrings(string).filter(isPalindromes);
}
