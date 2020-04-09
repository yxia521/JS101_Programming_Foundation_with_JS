// Diamonds
// Write a function that displays a four-pointed diamond in an nxn grid, where n is an 
// odd integer supplied as an argument to the function. You may assume that the argument 
// will always be an odd integer.

// Examples:

diamond(1);
// // logs
// // *

diamond(3);
// logs
//  *
// ***
//  *

diamond(9);
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

// input:
//   - odd integer
// output:
//   - diamond, string

// algo:
//   - iterate over upper diamond
//     - for each row (iteration)
//       - size of space, 4, 3, 2, 1
//       - size of star, 1, 3, 5, 7, 9
//   - lower diamond
//     - for each row
//       - size of space: 1, 2, 3, 4
//       - size of star: 7, 5, 3, 1

// thoughts: instead of using pad, something like ' '.repeat(sizeOfSpace) also works.
function diamond(odd) {
  let sizeOfSpace;
  let sizeOfStar;
  // upper
  for (let row = 1; row <= odd; row += 2) {
    sizeOfStar = row;
    sizeOfSpace = (odd - sizeOfStar) / 2;
    console.log(('*'.repeat(sizeOfStar)).padStart(sizeOfSpace + sizeOfStar, ' '));
  }

  // lower
  for (let row = odd - 2; row >= 1; row -= 2) {
    sizeOfStar = row;
    sizeOfSpace = (odd - sizeOfStar) / 2;
    console.log(('*'.repeat(sizeOfStar)).padStart(sizeOfSpace + sizeOfStar, ' '));
  }
}

// ls sol
function diamond(n) {
  numberSequence(n).forEach(number => {
    console.log(`${" ".repeat((n - number) / 2)}${"*".repeat(number)}`);
  });
}

function numberSequence(n) {
  let result = [];
  let increment = 2;
  let number = 1;

  while (number > 0) {
    result.push(number);
    if (number === n) {
      increment = -2;
    }
    number += increment;
  }

  return result;
}
