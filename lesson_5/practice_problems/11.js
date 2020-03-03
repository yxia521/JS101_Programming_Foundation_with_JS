// Given the following data structure, use the map method to return a new array identical in structure to the original 
// but, with each the number incremented by 1. Do not modify the original data structure.

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let newArr = arr.map(object => {
  let incrementedObj = {};

  for (let key in object) {
    incrementedObj[key] = object[key] + 1;
  }
  return incrementedObj;
});

console.log(newArr);
// => [ { a: 2 }, { b: 3, c: 4 }, { d: 5, e: 6, f: 7 } ]

arr; // [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }]
