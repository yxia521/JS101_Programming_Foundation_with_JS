// Now I Know My ABCs
// A collection of spelling blocks has two letters per block, as shown in this list:

// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M
// This limits the words you can spell with the blocks to only those words that do not use 
// both letters from any given block. You can also only use each block once.

// Write a function that takes a word string as an argument, and returns true if the word 
// can be spelled using the set of blocks, or false otherwise. You can consider the letters 
// to be case-insensitive when you apply the rules.

// Examples:

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false

// input:
//   - string
// output:
//   - true or false

// algo: 
// Define an array that contains the 13 two-letter blocks
// Turn the input string into an array of letters and iterate through it. For each letter:
// If we can't find a block that contains the letter, return false
// Otherwise, remove the block that contains the letter from the blocks array
// Return true after we've processed all the letters in the input string

// ls sol
function isBlockWord(word) {
  let blocks = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];
  let letters = word.split("");

  // if filter returns a nonempty array, the char is in one of the blocks, go directly to else statement
  for (let index = 0; index < letters.length; index += 1) {
    let matchingBlock = blocks.filter(block => {
      return block.indexOf(letters[index].toUpperCase()) > -1; 
    })[0];

  // if filter returns an empty array (undefined), means this char appeared before, and we remove that pair
    if (matchingBlock === undefined) { 
      return false;
    } else { // 
      blocks.splice(blocks.indexOf(matchingBlock), 1);
    }
  }

  return true;
}

// student's sol
function isBlockWord(word) {
  let blocks = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];

  for (let char of word.toUpperCase()) {
    let index = blocks.findIndex(block => block.includes(char));
    if (index < 0) return false;

    blocks.splice(index, 1);
  }

  return true;
}
