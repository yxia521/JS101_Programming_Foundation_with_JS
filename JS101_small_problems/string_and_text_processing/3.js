// Lettercase Counter
// Write a function that takes a string and returns an object containing three properties: 
// one representing the number of characters in the string that are lowercase letters, 
// one representing the number of characters that are uppercase letters, and 
// one representing the number of characters that are neither.

// Examples:

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }

// algo:
//   - create a new object
//   - iterate thru the string
//     - if the current char is /[a-z]/, the value of lowercase increment by 1
//     - if the ... /[A-Z]/, ... uppercase increment by 1
//     - else neither increment by 1
//   - return this object

function letterCaseCount(string) {
  let result = { lowercase: 0, uppercase: 0, neither: 0 };
  string.split('').forEach(char => {
    if (char.match(/[a-z]/g)) {
      result.lowercase += 1;
    } else if (char.match(/[A-Z]/g)) {
      result.uppercase += 1;
    } else {
      result.neither += 1;
    }
  });
  return result;
}

// ls sol
// || [], if string is empty, there's no an error raised later when we use .length

function letterCaseCount(string) {
  let lowerCases = string.match(/[a-z]/g) || [];
  let upperCases = string.match(/[A-Z]/g) || [];
  let neither = string.match(/[^a-z]/gi) || []; 
  return {
    lowercase: lowerCases.length,
    uppercase: upperCases.length,
    neither: neither.length
  };
}
