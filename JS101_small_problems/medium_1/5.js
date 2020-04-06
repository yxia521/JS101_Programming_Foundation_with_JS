// Word to Digit
// Write a function that takes a sentence string as an argument, and returns that string with every 
// occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' 
// — converted to its corresponding digit character.

// Example:

const NUMBERS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eigth', 'nine'];

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."
console.log(wordToDigit('The weight is done.')); 
// "The weight is done."

// input: string, enligh word
// output: corresponding number

// algo:
//   - create a constant array NUMBERS, containing number's enligh word
//   - iterate thru NUMBERS array
//     - if the word is included in the sentence, replace the sentence's word with this word's 
//     correspoinding index in NUMBERS array, remember to convert this index to string.
//     - reassign them to sentence
//   - return the sentence

function wordToDigit(text) {
  NUMBERS.forEach(word => {
    let regex = new RegExp('\\b' + word + '\\b', 'g'); 
    text = text.replace(regex, String(NUMBERS.indexOf(word))); // no need to worry about . after four
  });
  return text;
}

// If you created any additional test cases, you may have noticed that the provided solution 
// does not handle the case where a "number word" is a part of another word, such as:
// wordToDigit('The weight is done.');      // "The w8 is d1."
// We can handle this case by wrapping the regex pattern with the word boundary anchor, \b:
// regex = new RegExp('\\b' + word + '\\b', 'g');
