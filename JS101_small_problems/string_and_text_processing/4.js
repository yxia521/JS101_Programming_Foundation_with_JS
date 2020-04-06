// Capitalize Words
// Write a function that takes a string as an argument, and returns that string with 
// the first character of every word capitalized and all subsequent characters in lowercase.

// You may assume that a word is any sequence of non-whitespace characters.

// Examples:

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'
// notice that q in "quoted" is not capitalized
// toUpperCase handles the scenario in which the first character is not alphabetic, 
// and toLowerCase does the same for the remaining characters.

// algo:
//   - split each word, convert the string to an array
//   - iterate thru the arr
//     - for each word, first lower all characters, then uppercase the first char
//   - return a new array and convert it back to a string
  
function wordCap(string) {
  return string.split(' ').map(word => {
    word = word.toLowerCase();
    return word[0].toUpperCase() + word.slice(1);
  }).join(' ');
}

// ls sol
function wordCap(words) {
  return words
    .split(" ")
    .map(word => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
