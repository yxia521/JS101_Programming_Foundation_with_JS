// What is the return value of the filter method call below? Why?

[1, 2, 3].filter(num => 'hi');

// [1, 2, 3]
// filter selects the element in current iteration the callback's return value is truthy
// JS always evaluate 'hi' to true, so the callback's return value of every iteration is
// truthy. All elements will be selected to a new array, which is returned by filter.
