// Convert a Signed Number to a String!
// In the previous exercise, you developed a function that converts non-negative numbers to strings. 
// In this exercise, you're going to extend that function by adding the ability to represent negative numbers as well.

// Write a function that takes an integer, and converts it to a string representation.
// You may not use any of the standard conversion functions available in JavaScript, such as String() 
// and Number.prototype.toString(). You may, however, use integerToString() from the previous exercise.

// You might also want to check the Math.sign() function.

function integerToString(integer) {
  let digits = [];
  do {
    digits.push(integer % 10);
    integer = parseInt(integer / 10); // here also can be: Math.floor(integer / 10);
  } while (integer > 0);

  return digits.reverse().join('');
}

// algo:
//   1. if the number is 0, call integerToString
//   2. else if the number is negative, "-" + integerToString
//   3. else "+" + integerToString

function signedIntegerToString(integer) {
  if (integer === 0) {
    return integerToString(integer);
  } else if (integer < 0) {
    return "-" + integerToString(Math.abs(integer));
  } else {
    return "+" + integerToString(integer);
  }
}

// ls sol
function signedIntegerToString(number) {
  switch (Math.sign(number)) {
    case -1: // more concise
      return `-${integerToString(-number)}`; // better
    case +1:
      return `+${integerToString(number)}`;
    default:
      return integerToString(number);
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
