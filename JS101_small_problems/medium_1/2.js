// Rotation (Part 2)
// Write a function that rotates the last count digits of a number. 
// To perform the rotation, move the first of the digits that you want to 
// rotate to the end and shift the remaining digits to the left.

// Examples:

console.log(rotateRightmostDigits(735291, 1) === 735291);      
console.log(rotateRightmostDigits(735291, 2) === 735219);      
console.log(rotateRightmostDigits(735291, 3) === 735912);      
console.log(rotateRightmostDigits(735291, 4) === 732915);       
console.log(rotateRightmostDigits(735291, 5) === 752913);      
console.log(rotateRightmostDigits(735291, 6) === 352917);      

// input:
//   - number, the rightmost count digits
// output:
//   - a rotated number 

// algo:
//   - convert the number to string, and then array
//   - seperate the number by slice(-1) ...
//     - 1st part: left
//     - 2nd part: rightmost
//       - rotate this 2nd part by calling function rotateArray
//     - combine the 1st part with the rotated 2nd part
//   - convert this array back to a number, and return it

function rotateArray(array) {
  if (!Array.isArray(array)) return undefined;
  if (array.length === 0) return [];
  
  return array.slice(1).concat(array[0]);
}

function rotateRightmostDigits(number, rightMostDigits) {
  let allDigits = String(number).split('');
  let rotatedRightMostDigits = rotateArray(allDigits.slice(-rightMostDigits));
  let newNum = allDigits.slice(0, -rightMostDigits).concat(rotatedRightMostDigits);
  return Number(newNum.join(''));
}

// ls sol: its algo is basically the same as mine
// but since I use the previous function, which takes an array, so I convert the number to array
// ls sol rewrite a function takes string, so it only convert the number to string
// and seperate this string to two parts, and rotate the 2nd part
function rotateRightmostDigits(number, count) {
  let numberString = String(number);
  let firstPart = numberString.slice(0, numberString.length - count);
  let secondPart = numberString.slice(numberString.length - count);
  let resultString = firstPart + rotateString(secondPart);

  return Number(resultString);
}

function rotateString(string) {
  return string.slice(1) + string[0];
}
