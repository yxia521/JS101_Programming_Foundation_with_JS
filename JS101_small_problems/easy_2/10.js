// Convert a String to a Signed Number!
// In the previous exercise, you developed a function that converts simple numeric strings to integers. 
// In this exercise, you're going to extend that function to work with signed numbers.

// Write a function that takes a string of digits, and returns the appropriate number as an integer. 
// The string may have a leading + or - sign; if the first character is a +, 
// your function should return a positive number; if it is a -, your function should return a negative number. 
// If no sign is given, you should return a positive number.

// You may assume the string will always contain a valid number.
// You may not use any of the standard conversion methods available in JavaScript, such as parseInt() and Number(). 
// You may, however, use the stringToInteger() function from the previous lesson.

// code from Q9
function stringToInteger(string) {
  const NUMBERS = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9
};

  let arrayOfDigits = string.split('').map(num => NUMBERS[num]); // [4, 3, 2, 1]
  let value = 0;
  arrayOfDigits.forEach(digit => (value = (10 * value) + digit)); // POINT!
  return value;
}

// below is Q10 code
function stringToSignedInteger(string) {
  if (string[0] === "-") {
    return -stringToInteger(string.slice(1));
  } else {
    return stringToInteger(string.replace(/[^0-9]/g, ''));
  }
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true

// ls sol (I think mine better)
function stringToSignedInteger(string) {
  switch (string[0]) {
    case "-":
      return -stringToInteger(string.slice(1, string.length));
    case "+":
      return stringToInteger(string.slice(1, string.length));
    default:
      return stringToInteger(string);
  }
}

