// Next Featured Number Higher than a Given Value
// A featured number (something unique to this exercise) is an odd number that is a multiple of 7, 
// with all of its digits occuring exactly once each. For example, 49 is a featured number, but 98 is not 
// (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

// Write a function that takes an integer as an argument, and returns the next featured number greater 
// than the integer. Issue an error message if there is no next featured number.

// NOTE: The largest possible featured number is 9876543201.

// Examples:

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."

// input:
//   - number
// output:
//   - a featured number
//     - odd number; multiple of 7; every digit occurs once
//   - or an error msg 
//     - string

// algo:
//   - if the number is >= 9876543201, return error
//   - else
//     - for loop, starting from this number + 1, increment by 1 in each iteration
//       - check current number
//         - multiple of 7
//         - odd number
//         - every digit occur once
//       - if all true
//         - return this number
      
function featured(number) {
  if (number >= 9876543201) return "There is no possible number that fulfills those requirements.";
  for (let i = number + 1;; i += 1) {
    if (i % 7 === 0 && i % 2 !== 0 && !(/([0-9]).*?\1/.test(i))) return i;
  }
}

// ls sol: improve efficiency
function featured(number) {
  const MAX_FEATURED = 9876543201;
  let featuredNum = toOddMultipleOf7(number);

  do {
    if (allUnique(featuredNum)) {
      return featuredNum;
    }

    featuredNum += 14;
  } while (featuredNum < MAX_FEATURED);

  return 'There is no possible number that fulfills those requirements.';
}

function toOddMultipleOf7(number) {
  do {
    number += 1;
  } while (number % 2 === 0 || number % 7 !== 0);

  return number;
}

function allUnique(number) {
  let digits = String(number).split('');
  let seen = {};

  for (let idx = 0; idx < digits.length; idx += 1) {
    if (seen[digits[idx]]) {
      return false;
    }

    seen[digits[idx]] = true;
  }

  return true;
}

// other's sol
function unique(number) {
  let numbers = Array.from(number.toString()).map(Number);
  let uniqueNumbers = Array.from(new Set(numbers)); // the way he determines unique is good
  return numbers.length === uniqueNumbers.length;
}

function featured(number) {
  number += 1;

  while ((number % 7 !== 0) || (number % 2 === 0)) {
    number += 1; 
  }

  while (number <= 9876543201) {
    if (unique(number)) return number;
    number += 14; 
  }

  return 'There is no possible number that fulfills those requirements.';
}
