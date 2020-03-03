// Using the forEach method, write some code to output all vowels from the strings in the arrays. Don't use a for or while loop.

const VOWELS = 'aeiou';

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

Object.values(obj).forEach(subarray => {
  subarray.forEach(word => {
    word.split('').forEach(char => {
      if (VOWELS.includes(char)) {
        console.log(char);
      }
    });
  });
});

// e
// u
// i
// o
// o
// u
// e
// o
// e
// e
// a
// o
