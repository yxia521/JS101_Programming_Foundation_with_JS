// Letter Counter (Part 2)
// Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. 
// For instance, the word size of "it's" is 3, not 4.

// Examples:

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}

function wordSizes(text) {
  let result = {};
  let words = text.split(' '); // [ 'Four', 'score', 'and', 'seven.' ]

  if (text) {
    for (let idx = 0; idx < words.length; idx += 1) {
      let wordSize = words[idx].replace(/[^a-z]/gi, '').length; // clean each word
      if (!result[wordSize]) result[wordSize] = 0; // if the key doesn't exist, result[wordSize] evaluates to undefined
      result[wordSize] += 1;
    }
  }

  return result;
}
