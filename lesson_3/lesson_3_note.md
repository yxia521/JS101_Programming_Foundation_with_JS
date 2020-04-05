- How to append a string to another string? (2 ways)
  - `+`
  
  NOTE that `+` can do String concatenation, but not Array concatenation, for array concatenation, use `array.concat`
  
    ```javascript
    'hi' + ' world';  // will be 'hi world'
    [1, 2, 3] + [4];  // will not be [1, 2, 3, 4], '1, 2, 34' instead
    ```
  
  - `string1.concat(string2)`
  
- How to merge 2 arrays?
  
  - `arr1.concat(arr2)`
  
- How to merge 2 objects? or add one to another?
  
  ```javascript
  Object.assign(obj1, obj2); // mutate obj1
  ```
  
- How to get some part of a string? (at least 2 ways)

  - `string.substring(1, 3);` inclusive start, exclusive end

    `string.substring(2);` starting from index 2 to the end

  - `string.slice(1, 3)`  inclusive start, exclusive end

    `string.slice(2)` starting from index 2 to the end

    `string.slice()`: starting from index 0, shallow copy the string

    `string.slice(-2)`: starting from index at length - 2, to the end: 

    ```javascript
    let str = 'hiworld'
    str.slice(-2); // 'ld'
    ```

  - `slice` works on Array, returns array; works on string, returns string

- How to remove, replace, or insert elements to an array? (use a mutating method)

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
  (statement2.match(/t/g) || []).length; // 0
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

- How to create a *shallow copy* of an array? (Note shallow copy, instead of deep copy)

  ```javascript
  let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
  let arr2 = arr1.slice(); // arr2 is a shallow copy of arr1
  ```

  which means, when we reassign value to one of these object elements (cuz they're mutable), `arr1` will be changed too:

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

- How to determine is a value is `NaN`:

  ```javascript
  isNaN(9);   // false
  isNaN(NaN); // true
  ```

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

  `[...Array(99)]`: an array of 99 `undefined` 
  
  `[...Array(99).keys()]`: an array of number 0 - 98
  
  `++x`: precedence increment happens after the value returns, so it contains the incremented value, returns an array of number 1 - 99
  
  `x++`: happens before the value returns, so it doesn't contain the incremented value, still returns an array of number 0 - 98

- Array values with negative indexes is considered as empty array, i.e. when you check `length`, it's `0`

  ```javascript
  let arr = [];
  arr[-1] = 5;
  arr.length; // => 0, meaning it's empty
  arr;        // => [ '-1': 5 ], which is not actually an element
  ```

- `false` is not falsy, it is exactly false.

- How to remove anything except numbers from **a string**?

  ```javascript
  "+100".replace(/[^0-9]/g, ''); // returns "100"
  ```

  - `replace` returns a new string, non-mutating

- How to get a number digit by digit? How to get a one's (rightmost) digit of a number? ten's digit? .... (show me the math, this is not difficult, but try to memorize the logic for time saving during the interview)
  
  - `4321 / 10` = ?
- `4321 % 10` = ?  to get the rightmost digit of a number
  
- `reverse()` only works for Array

- When transfer a number to string, use `String(17)` in preference to `(17).toString()`

- What does `push` return? 
  
- The length of new array
  
- How to check if a number is 0, positive or negative? use a `Math` method.

  ```javascript
  Math.sign(0)     // 0
  Math.sign(-2432) // -1
  Math.sign(677)   // 1, note there's no +
  Math.sign('-3')  // -1
  ```

- How to create multiple times of a specific string, character? like `'hi'` => `'hihihi'`

  `string.repeat(times)`: `'hi'.repeat(3)` returns a new string, non-mutating

- How to compare the right-side and the left-side of a number is equal? (before we compare, what should we do)
  
- `String(number)` to compare them as strings
  
- How to clean up multiple consecutive spaces to just one space in a string? (Natural reaction: when need to remove something, consider `replace` )

  ```javascript
  let s = "   what s my     line ";
  s.replace(/\s+/g, ' ')
  ```

  - Note `/\s/` VS `/\s+/`
    -  `/\s/` : one space, replace each character into one
    - `/\s+/`: one or more space, replace each consecutive character into one

  ```javascript
  s.replace(/\s+/g, '#') // "#what#s#my#line#"
  s.replace(/\s/g, '#')  // "###what#s#my#####line#"
  ```

- Use Regex to show the following: 
  - Character that is non-alphabetic, both uppercase and lowercase: `/[^a-z]/gi`, `i` case-insensitive
  - Character that is not number: `/[^0-9]/g`

- What's the form of `switch` statement, when there's explicit `return`, how can we write it more concise?

  ```javascript
  switch (String(century).slice(-1)) {
      case '1':
       return `${century}st`;
      case '2':
      return `${century}nd`;
      case '3':
      return `${century}rd`;
      default:
      return `${century}th`;
    }
  ```

  more concise:

  ```javascript
  switch (String(century).slice(-1)) {
      case '1': return `${century}st`; // one-line expression
      case '2': return `${century}nd`;
      case '3': return `${century}rd`;
      default: return `${century}th`;
    }
  ```

  - If no explicit `return`, don't forget `break;` keyword
  - remember to add `()` after `switch`
  - remember how to write `default`

- A very quick expression to show the last, or last two characters of a string?

  `'string'.slice(-1)` `'string'.slice(-2)`

- How to generate a random integer between any two numbers?

  ```javascript
  Math.floor(Math.random() * ((max - min) + 1)) + min;
  ```

  - Note: `Math.random` generates floating point number, but `Math.floor` turns it into an integer.

- What does `Math.ceil()` `Math.floor()` return if the argument is an integer?

  - the integer itself.

- Remember that `reverse` is for **Array**!!! `Array.reverse()` : **mutating method**

