// What is the return value of map in the following code? Why?

['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

// [undefined, 'bear']
// for the first element 'ant', the if condition evaluates to false and elem isn't returned.
// When a function doesn't explicitly return something, it implicitly returns undefined
// That's why here the callback's return value for the first element is undefined.
