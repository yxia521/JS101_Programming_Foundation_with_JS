// Grocery List
// Write a function that takes a grocery list (a two-dimensional array) with each element containing a fruit and a quantity, and returns 
// a one-dimensional array of fruits, in which each fruit appears a number of times equal to its quantity.

// Example:

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

// input: nested array
// output: a flatten array
// algo:
//   - get a list of all values, variable times
//   - use times to push each value n times to a new array

// my sol is kinda incorrect
function buyFruit(fruits) {
  let times = fruits.map(pair => pair[1]); // [ 3, 1, 2 ]
  let fruit = fruits.map(pair => pair[0]); // ["apple", "orange", "banana"]
  let result = [];
  
  times.forEach(time => {
    for (let count = 0; count < time; count += 1) {
      result.push(fruit[count]);
    }
  });
   
  return result; // [ 'apple', 'orange', 'banana', 'apple', 'apple', 'orange' ]
}

// ls sol
// 1
function buyFruit(fruitsList) {
  return fruitsList
    .map(fruit => repeat(fruit))
    .reduce((groceryList, fruit) => groceryList.concat(fruit));
}

function repeat(fruitAndQuantity) {
  let result = [];
  let fruit = fruitAndQuantity[0];
  let quantity = fruitAndQuantity[1];

  for (let num = 0; num < quantity; num += 1) {
    result.push(fruit);
  }

  return result;
}
// 2
function buyFruit(list) {
  const mergedResult = list.map(subarray =>
    Array(subarray[1]).fill(subarray[0])
  );
  return [].concat(...mergedResult);
}
