// What is the callback's return value in the following code? 
// Also, what is the return value of every in this code?

[1, 2, 3].every(num => {
  return num = num * 2;
});

// The callback's return value is 2, 4, 6 respectively. The expression num = num * 2
// is an assignment expression and will evaluate as the expression on the right-hand side
// of the assignment and that's what gets returned in each iteration.

// every returns true when it evaluates all of the callback's return values
// to true. Since all 2, 4, 6 are truthy, every's return value is true.
