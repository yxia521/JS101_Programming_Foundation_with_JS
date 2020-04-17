// Now I Know My ABCs
// A collection of spelling blocks has two letters per block, as shown in this list:

// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M
// This limits the words you can spell with the blocks to only those words that do not 
// use both letters from any given block. You can also only use each block once.

// Write a function that takes a word string as an argument, and returns true if the word 
// can be spelled using the set of blocks, or false otherwise. You can consider the letters 
// to be case-insensitive when you apply the rules.

// input:
//   - string
// output:
//   - true / false
// rules:
//   - case insensitive
//   - words can't use both letters from the same block

// algo:
//   - initialize a const blocks = [...]
//   - convert the string into array, iterate thru the array
//   - for each letter
//     - if it matches any block, remove that block from the array
//     - if it doesn't match any block do nothing
//   - end loop
//   - check what left for the array, i.e. length, if the length is = blocks.length - string.length, return true
//   - otherwise return false

// my sol, passed all tested cases, but doesn't make sense tho
let blocks = ["BO", "XK", "DQ", "CP", "NA", "GT", "RE", "FS", "JW", "HU", "VI", "LY", "ZM"];

function isBlockWord(str) {
  let words = str.split('');
  let matches = blocks.map(block => {
    for (let idx = 0; idx < words.length; idx++) {
      if (block.includes(words[idx].toUpperCase())) {
        return '';
      }
    }
  });

  return matches.filter(el => el === '').length === str.length;
}

// ls sol
function isBlockWord(word) {
  let blocks = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];
  let letters = word.split("");

  for (let index = 0; index < letters.length; index += 1) {
    let matchingBlock = blocks.filter(block => {
      return block.indexOf(letters[index].toUpperCase()) > -1;
    })[0];

    if (matchingBlock === undefined) {
      return false;
    } else {
      blocks.splice(blocks.indexOf(matchingBlock), 1);
    }
  }

  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false
