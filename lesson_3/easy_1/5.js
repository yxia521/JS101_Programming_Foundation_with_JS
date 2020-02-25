// What will the following code output?

console.log(false == '0');
// true, '0' will be implicitly coerced to 0, which JS evaluates to false.
console.log(false === '0');
// false
