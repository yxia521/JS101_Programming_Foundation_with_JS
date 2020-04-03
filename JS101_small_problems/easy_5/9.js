// How Many?
// Write a function that counts the number of occurrences of each element in a given array. 
// Once counted, log each element alongside the number of occurrences. Consider the words 
// case sensitive e.g. ("suv" !== "SUV").

// Example:

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2

function countOccurrences(arr) {
  let result = {};
  arr.forEach(el => {
    if (!result[el]) result[el] = 0; // key point, how to initialize each key's value to 0
    result[el] += 1; // if we already have this key, just increment its value by 1
  });
  for (let [k, v] of Object.entries(result)) { // key point, how to log properties in object
    console.log(`${k} => ${v}`);
  }
}
