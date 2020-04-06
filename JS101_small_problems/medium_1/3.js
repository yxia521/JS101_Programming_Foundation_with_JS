// Rotation (Part 3)
// Take the number 735291 and rotate it by one digit to the left, getting 352917. 
// Next, keep the first digit fixed in place and rotate the remaining digits to 
// get 329175. Keep the first two digits fixed in place and rotate again to get 321759. 
// Keep the first three digits fixed in place and rotate again to get 321597. 
// Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. 
// The resulting number is called the maximum rotation of the original number.

// Write a function that takes an integer as an argument, and returns the maximum rotation of that 
// integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

// Examples:

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845

// I'm using ls sol from previous question
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

// input: number
// output: max rotated number, we need to take care of the leading zeros

// algo:
//   - keep the first 0 digits fixed, rotate the other 6, 735291 -> 352917
//   -                1                                5, 352917 -> 329175
//   -                2                                4, 329175 -> 321759
//   - ...
//   -                4                                2,           321579
  
//   - call the function in loop
//     - dcrease the 2nd argu count by 1 in each iteration, also update the value of 1st argu
//   - return the last value

function maxRotation(number) {
  for (let count = String(number).length; count >= 2; count -= 1) {
    number = rotateRightmostDigits(number, count);
  }
  return number;
}
