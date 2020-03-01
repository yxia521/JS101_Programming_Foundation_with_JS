// Pick out the minimum age from our current Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

Math.min(...Object.values(ages)); // 10

// Math.min() returns the minimum value of a range of number, its parameters must be
// a list of numbers. It returns NaN if any parameter is not a number and can't be converted to one.

// Here, we get an Array of age [32, 30, 5843, 10, 22, 237]
// Have to use spread syntax ... to convert the array to a list of numbers.
