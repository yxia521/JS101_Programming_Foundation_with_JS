// Convert a Number to a String!
// In the previous two exercises, you developed functions that convert simple numeric strings to signed integers. 
// In this exercise and the next, you're going to reverse those functions.

// Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3, and so on) to 
// the string representation of that integer.

// You may not use any of the standard conversion functions available in JavaScript, 
// such as String(), Number.prototype.toString, or an expression such as '' + number. 
// Your function should do this the old-fashioned way and construct the string by analyzing and manipulating the number.

// algo:
// 1. seperate and pick each digit to a new array
// 2. join all elements of this array so naturally turn into string
// tricky part: the math for getting the number digit by digit

// I used while loop in my first try, it needed longer code to discuss integer === 0
// situation lonely, however, do..while loop is better cuz no matter 0 or not, it at
// least run the loop once, I don't need to write separate code for integer 0

function integerToString(integer) {
  let digits = [];
  do {
    digits.push(integer % 10);
    integer = parseInt(integer / 10); // here also can be: Math.floor(integer / 10);
  } while (integer > 0);

  return digits.reverse().join('');
}

// ls sol
const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  let result = '';

  do {
    let remainder = number % 10;      // tricky part
    number = Math.floor(number / 10); // tricky part

    result = DIGITS[remainder] + result;
  } while (number > 0);

  return result;
}

console.log(integerToString(4321));       // "4321"
console.log(integerToString(0));          // "0"
console.log(integerToString(5000));       // "5000"
console.log(integerToString(1234567890)); // "1234567890"
