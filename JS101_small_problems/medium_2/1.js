// Lettercase Percentage Ratio
// Write a function that takes a string, and returns an object containing the following three properties:

// the percentage of characters in the string that are lowercase letters
// the percentage of characters that are uppercase letters
// the percentage of characters that are neither
// You may assume that the string will always contain at least one character.

// Examples:

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

// input:
//   - string
// output:
//   - object, 3 pairs
  
// algo:
//   - create a new object storing result, 
//   - iterate thru the string
//     - if the character is lowercase, lowercase's value increment by 1
//     - if        ... uppercase, uppercase's value increment by 1
//     - otherwise, neither'value increment by 1
//   - sum, string.length
//   - to get the percentage, we use the count / string.length, convert to the percentage
//   - return our object

function letterPercentages(string) {
  let result = { lowercase: 0, uppercase: 0, neither: 0 };
  
  string.split('').forEach(char => {
    if (/[a-z]/g.test(char)) {
      result.lowercase += 1;
    } else if (/[A-Z]/g.test(char)) {
      result.uppercase += 1;
    } else {
      result.neither += 1;
    }
  });
                           
  let lowercasePerc = ((result.lowercase / string.length) * 100).toFixed(2);
  let uppercasePerc = ((result.uppercase / string.length) * 100).toFixed(2);
  let neitherPerc = ((result.neither / string.length) * 100).toFixed(2);
  return `{lowercase: "${lowercasePerc}", uppercase: "${uppercasePerc}", neither: "${neitherPerc}"}`
}

// ls sol

// Solution 1
function letterPercentages(string) {
  let count = string.length;
  return {
    lowercase: (((string.match(/[a-z]/g) || []).length / count) * 100).toFixed(
      2
    ),
    uppercase: (((string.match(/[A-Z]/g) || []).length / count) * 100).toFixed(
      2
    ),
    neither: (((string.match(/[^a-z]/gi) || []).length / count) * 100).toFixed(
      2
    )
  };
}

// Solution 2
function letterPercentages(string) {
  let count = string.length;

  function percentage(regex) {
    let matchingChars = string.match(regex) || [];
    return ((matchingChars.length / count) * 100).toFixed(2);
  }

  return {
    lowercase: percentage(/[a-z]/g),
    uppercase: percentage(/[A-Z]/g),
    neither:   percentage(/[^a-z]/gi),
  };
}
