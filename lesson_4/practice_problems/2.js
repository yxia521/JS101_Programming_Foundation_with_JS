// What is the return value of map in the following code? Why?

[1, 2, 3].map(num => {
  num * num;
});

// [undefined, undefined, undefined]

// map looks at the return value of callback to decide the elements in the new returned
// array, here we don't have an explicit return, so the callback's implicit return value
// is undefined in each iteration, so map returns a new array with three undefined.
