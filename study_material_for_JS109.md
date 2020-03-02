```javascript
let object = { first: [1] };
let numArray = object["first"].slice(); // works on [1]
numArray.push(2); // 1 is primitive value, immutable, so the original [1] is unchanged
numArray; // => [1, 2]
object;   // => { first: [1] }

numArray[0] = 5;
numArray; // => [5, 2]
object;   // => { first: [1] }
```

Must understand the difference than not using `slice`:

- `numArray` itself is a new array, recall that we can change part of array, so whatever destructive action you do on `newArray`, it mutates for sure
- `slice` creates a shallow copy, we're talking about if the original will be mutated when we mutate `numArray`, it's a different topic, so we analyze from a perspective of what level `slice` works on, if there're objects within the object/array, those elements are shared by the original and the copy, not copied.

```javascript
let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice(); // works on {first: "value1"}, mutable
arr2[0].first = 42;
console.log(arr1); // => [ { first: 42 }, { second: 'value2' }, 3, 4, 5 ]
```

```javascript
let arr = [[1, 3], [2]];
arr[0][1] = 5;
arr; // => [ [ 1, 5 ], [ 2 ] ]

let arr2 = arr[0].slice(); // works on [1, 3]
arr2.push(6);              // 1, 3 are both primitive values, immutable
arr2[0] = 8;
arr2; // => [8, 3, 6]
arr;  // => [[1, 3], [2]]

let arr3 = arr.slice();
arr3[0][1] = 4;
arr3; // => [ [ 1, 4 ], [ 2 ] ]
arr;  // => [ [ 1, 4 ], [ 2 ] ]
```

