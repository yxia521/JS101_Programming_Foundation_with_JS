// Always Return Negative
// Write a function that takes a number as an argument. If the argument is a positive number, 
// return the negative of that number. If the argument is a negative number, return it as-is.

// Examples:

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0

// mine is sol to further exploration already
function negative(number) {
  return number < 0 ? number : -number;
}

// ls sol
function negative(number) {
  return Math.abs(number) * -1; // convert to positive first, then * -1 to convert to negative
}
