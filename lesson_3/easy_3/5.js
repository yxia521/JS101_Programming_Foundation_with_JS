// The following function unnecessarily uses two return statements to return boolean values. How can you eliminate the unnecessary duplication?
// Try to come up with at least two different solutions.

function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

// 1)
function isColorValid(color) {
  return color === "blue" || color === "green";
}

// 2) use arrow function
const isColorValid = color => color === "blue" || color === "green";

// 3) use includes, especially when you have more than 2 choices
const isColorValid = color => ["blue", "green"].includes(color);

let color1 = 'blue';
let color2 = 'yellow';
console.log(isColorValid(color1)); // true
console.log(isColorValid(color2)); // false
