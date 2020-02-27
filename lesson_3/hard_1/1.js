// Will the following functions return the same results?
// Try to answer without running the code or looking at the solution.

function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());

// No, the first one returns an object { prop1: 'hi there' }, the second returns undefined
// without throwing any errors.
// No line terminator is allowed between return keyword and the expression. If ; is omitted,
// Automatic Semicolon Insertion will transform code into:
// return;
// {
//    prop1: "hi there"
// };
// since no value will be returned after return keyword, undefined is returned instead.
// then the function stops execution right away, and the object never gets executed. 
// So when we call function second(), undefined is returned.
