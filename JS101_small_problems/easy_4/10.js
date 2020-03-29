// Letter Swap
// Given a string of words separated by spaces, write a function that swaps 
// the first and last letters of every word.

// You may assume that every word contains at least one letter, and that the string will 
// always contain at least one word. You may also assume that each string contains nothing 
// but words and spaces, and that there are no leading, trailing, or repeated spaces.

// Examples:

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"

function swap(words) {
  let wordsArray = words.split(' ');

  for (let idx = 0; idx < wordsArray.length; idx += 1) {
    wordsArray[idx] = swapFirstLastCharacters(wordsArray[idx]);
  }

  return wordsArray.join(' ');
}

function swapFirstLastCharacters(word) {
  if (word.length === 1) {
    return word;
  }

  return word[word.length - 1] + word.slice(1, -1) + word[0];
}
