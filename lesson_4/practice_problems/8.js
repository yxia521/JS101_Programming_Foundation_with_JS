// Take a look at the following array.

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
// Write a program that uses this array to create an object where the names 
// are the keys and the values are the positions in the array:

function newObj(arr) {
  let result = {};
  arr.forEach((name, index) => {
    result[name] = index;
  });
  return result;
}

console.log(newObj(flintstones));
// { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }
