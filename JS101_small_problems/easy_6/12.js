// Matching Parentheses?
// Write a function that takes a string as argument, and returns true if all parentheses in the string are 
// properly balanced, false otherwise. To be properly balanced, parentheses must occur in matching '(' and ')' pairs.

// Examples:

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

// The tests above should log true.
// Note that balanced pairs must each start with a (, not a ).

function isBalanced(str) { 
  let count = 0;
  
  for (let idx = 0; idx < str.length; idx += 1) {
    if (str[idx] === '(') { 
      count += 1;
    } else if (str[idx] === ')') { 
      count -= 1;
    }
    if (count < 0) return false;
  }
  return count === 0;
}
