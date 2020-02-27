// What does the last line in the following code output?
// Try to answer without running the code or looking at the solution.

let object = { first: [1] };
let numArray = object["first"].slice();
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);   // my answer: {first: [1, 2]}, correct
