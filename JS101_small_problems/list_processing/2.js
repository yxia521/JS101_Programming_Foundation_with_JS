// Alphabetical Numbers
// Write a function that takes an array of integers between 0 and 19, and returns an 
// array of those integers sorted based on the English word for each number:

// zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, 
// thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen

// algo:
// first get:
// [
//   'eight',    'eighteen',
//   'eleven',   'fifteen',
//   'five',     'four',
//   'fourteen', 'nine',
//   'nineteen', 'one',
//   'seven',    'seventeen',
//   'six',      'sixteen',
//   'ten',      'thirteen',
//   'three',    'twelve',
//   'two',      'zero'
// ]
// then get the index of each word in the original array NUMBERS 

const NUMBERS = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen"
];

function alphabeticNumberSort(list) {
  let sortedWords = list.map(num => NUMBERS[num]).sort();
  return sortedWords.map(word => NUMBERS.indexOf(word));
}

console.log(alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
