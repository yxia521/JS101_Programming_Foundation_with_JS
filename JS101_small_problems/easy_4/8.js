// Letter Counter (Part 1)
// Write a function that takes a string consisting of zero or more space separated words, 
// and returns an object that shows the number of words of different sizes.

// Words consist of any sequence of non-space characters.

// Examples:

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}

// key: the length of each word
// value: the count of each length

function wordSizes(text) {
  let result = {};
  let words = text.split(' '); // [ 'Four', 'score', 'and', 'seven.' ]

  if (text) {
    for (let idx = 0; idx < words.length; idx += 1) {
      let wordSize = words[idx].length;
      if (!result[wordSize]) result[wordSize] = 0; // if the key doesn't exist, result[wordSize] evaluates to undefined
      result[wordSize] += 1;
    }
  }

  return result;
}
