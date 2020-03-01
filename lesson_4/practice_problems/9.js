// Add up all of the ages from the Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

console.log(Object.values(ages).reduce((acc, num) => acc + num, 0));
// 0 is optional, when you don't initialize a value to acc, JS gives 0 by default
// Note, can write as either acc + num or acc += num
// JS runs smoothly, but eslint raises error warning 'Arrow function should not return assignment'
// reduce already determines that acc is an accumulator, so when we do acc + num
// it implicitly performs operation like acc = acc + num, no need to write explicit assignment

// or
let sumOfAge = 0;
Object.values(ages).forEach(age => sumOfAge += age); // warning: 'Arrow function should not return assignment'
console.log(sumOfAge);
// 6174
