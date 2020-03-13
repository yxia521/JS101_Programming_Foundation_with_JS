- How to prepend  a string to another string? (2 ways)
  - `+`
  - `string1.concat(string2)`

- How to merge 2 arrays?
  
  - `arr1.concat(arr2)`
  
- How to merge 2 objects? or add one to another?
  
- `Object.assign(obj1, obj2);` // mutate obj1
  
- How to get some part of a string? (at least 2 ways)

  - `string.substring(1, 3);` inclusive start, exclusive end

    `string.substring(2);` starting from index 2 to the end

  - `string.slice(1, 3)`  inclusive start, exclusive end

    `string.slice(2)` starting from index 2 to the end

    `string.slice()`: starting from index 0

- How to remove, replace, or insert elements to an array (mutable)? (use only 1 method)

  - `array.splice(index, element amount, element needs to be inserted/ will replace)`

  ```javascript
  let arr = [1, 2, 3]
  arr.splice(2, 1)       // remove el at index 2, remove one el
  arr.splice(2, 0, 'hi') // add el at index 2, add one 'hi'
  arr.splice(2, 1, 'hi') // replace one el at index 2 with 'hi'
  ```

- How to count the occurences of a specific character in a string? (use one line code)

  ```javascript
  let statement2 = "Easy come, easy go.";
  (statement2.match(/t/g) || []).length;
  ```

- How to center some text? (or say how to return a string multiple times)

  1) If we have a 40-character wide table of Flintstone family members, how can we center the following title above the table with spaces? `string.padStart()`

  ```javascript
  let title = "Flintstone Family Members";
  let leftSpace = Math.floor((40 - title.length) / 2);
  
  title.padStart(leftSpace + title.length, ' '); // ' ' is optional
  ```

  `' '` is optional, cuz if no 2nd argument passed in, `padStart` pads spaces `' '` by default. If you want to pad some other things rather than spaces, you add a 2nd argument, like `'*'`, `0`...

  2) `string.repeat(integer)`

  ```javascript
  'i love you '.repeat(3)
  // 'i love you i love you i love you '
  ```

- `+` can do String concatenation, but not Array concatenation

  ```javascript
  'hi' + ' world';  // will be 'hi world'
  [1, 2, 3] + [4];  // will not be [1, 2, 3, 4]
  ```

- How to create a *shadow copy* of an array? (Note shadow copy, instead of deep copy)

  ```javascript
  let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
  let arr2 = arr1.slice(); // arr2 is a shadow copy of arr1
  ```

  which means, when we reassign value to one of these object elements, `arr1` will be changed too:

  ```javascript
  arr2[0].first = 42;
  ```

  `arr1[0]` `arr2[0]`  are pointing to the same object, the change will be reflected on `arr1` too

- How to determine if a character is uppercase or lowercase? (the condition in `if` statement) 2 ways:

  1)

  ```javascript
  // it's uppercase
  if (char === char.toUpperCase()) {
    // ...
  }
  ```

  2) use match and regex:

  ```javascript
  if (char.match(/[A-Z]/)) // if true, is uppercase
  ```

- What does following code log? Why?

  `console.log(0.3 + 0.6);`

  `0.9`. :speaker: JS uses floating point numbers for ALL NUMERIC OPERATIONS 

- How to determine is a value is `NaN`

  `isNaN(x)`

- How to convert an array to a  list of arguments, so that some of method who only accepts a list of arguments can use the array? like `Math.min(a list of numbers)`

  Spread operator `...`

  ```javascript
  let ages = [32, 30, 5843, 10, 22, 237];
  Math.min(...ages); // convert array to a list of numbers
  ```

- How `+` operator working on array? Give me an example.

  ```javascript
  [1, 2] + [3, 4] // '1,23,4'
  ```

- How to keep two digits after decimal point of a floating number? (What data type this method return?)

  ```javascript
  (54.3421).toFixed(2); // => '54.34'
  ```

- How to create a range from 1 to 99? 

  ```javascript
  [...Array(99).keys()].map(x => ++x);
  // first create 0...98, then increment every number by 1
  ```

  