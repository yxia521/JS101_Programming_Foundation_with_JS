- How to append a string to another string? (2 ways)
  - `+`
  
  NOTE that `+` can do String concatenation, but not Array concatenation, for array concatenation, use `array.concat`
  
    ```javascript
    'hi' + ' world';  // will be 'hi world'
    [1, 2, 3] + [4];  // will not be [1, 2, 3, 4], '1, 2, 34' instead, always return string
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

- How to remove, replace, or insert elements to an array? (use a **mutating** method)

  - `array.splice(index, element amount, element needs to be inserted/ will replace)`

  ```javascript
  let arr = [1, 2, 3]
  arr.splice(2, 1)       // remove 1 el at index 2, returns array [3], now arr = [1, 2]
  arr.splice(2, 0, 'hi') // insert a 'hi' at index 2, returns [], arr = [ 1, 2, 'hi', 3 ]
  arr.splice(2, 1, 'hi') // replace 1 el at index 2 with 'hi', return [3], arr=[1, 2, 'hi']
  ```

  - For replacing a string with another string: `string.replace(regex, anotherString)` (non-mutating)

- How to count the occurrences of a specific character in a string? (use one line code, regex)

  ```javascript
  let statement2 = "Easy come, easy go.";
  (statement2.match(/t/g) || []).length; // 0
  ```

- Or when you only care about if a char occurs once or more than once in a string (no need to count occurrence), how can you do?

  ```javascript
  string.indexOf(char) === string.lastIndexOf(char);
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

  2) use `match` and regex:

  ```javascript
  if (char.match(/[A-Z]/)) // if true, is uppercase
  ```

- What does following code log? Why?

  `console.log(7/2);`

  `3.5`. :speaker: JS uses floating point numbers for ALL NUMERIC OPERATIONS 

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

- How to remove anything except numbers from **a string**? Remove vowels from a string? etc...

  ```javascript
  "+100".replace(/[^0-9]/g, ''); // returns "100"
  ```

  - `replace` returns a new string, non-mutating

- How to get a number digit by digit? How to get a one's (rightmost) digit of a number? ten's digit? .... (show me the math, this is not difficult, but try to memorize the logic for time saving during the interview)
  
  - `4321 / 10` = ?
  
- `4321 % 10` = ?  to get the rightmost digit of a number
  
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
  
  - `String(number)` to compare them as strings.
  
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

- Format difference between `match` and `test`? What do they return respectively?

  `string.match(/[a-z]/)`: returns an array containing element satisfying regex, if nothing match, return `null`, which is falsy

  `/[a-z]/.test(string)`: return boolean `true` or `false`

---

Regex

- `/[a-z]/g` : Checks if the character is a lowercase letter between `'a'` and `'z'`.

- `/[A-Z]/g` : Checks if the character is an uppercase letter between `'A'` and `'Z'`.

- `/[^a-z]/gi` : Checks if the character is neither an uppercase letter nor a lowercase letter.

- `g` : Tells the regex engine to search the entire string.

- `i` : Tells the regex engine to ignore case.

- `let regex = new RegExp(word, 'gi')`, when the thing you want to match is a string, not a regex, you can write this way, because `string.match()` must have regex inside of ()

  ```javascript
  function searchWord(word, text) {
    let regex = new RegExp(word, 'gi'); // word here is a string
    return text.match(regex) ? text.match(regex).length : 0;
  }
  ```

  string_and_text_processing Q9

---

- Instead of using `array.flat`, LS usually use `result = result.concat([1, 2])` to make sure there's no nested array in the result array. `result` here is empty array `[]`

  ```javascript
  ...
  let result = [];
    result = result.concat(array.slice(1), array[0]);
    return result;
  ...
  ```

- Give at least 2 ways to create a range from 1 to a given number? for example,  given 3, create 1, 2, 3

  1) `[...Array(3).keys()].map(x => ++x)`

  2) use `for` loop

  ```javascript
  function sumSquareDifference(count) {
    let sum = 0;
    let sumOfSquares = 0;
    for (let number = 1; number <= count; number++) {
      sum += number;
      sumOfSquares += Math.pow(number, 2);
    }
    return Math.pow(sum, 2) - sumOfSquares;
  }
  ```

- Given an array `arr = [1, 2, 3]`, how to convert it to a range of numbers? In order to be used by `max`

  `Math.max(...arr)` since `max` `min` take range: `Math.max(1, 2, 3)`

- How to determine if a number **has unique digits**? (at least 2 ways)

  1) first, regex to determine if a number has repeated digits, if yes, return true, if no, return false.

  ```javascript
  !!(/([0-9]).*?\1/.test(123))  // returns false, so !! has to do opposite way
  ```

  2) convert to string first, then use a tricky way

  ```javascript
  let i = 1233;
  let digits = String(i);         // a string "1233"
  let uniqueDigits = [...new Set(digits)];  // an array ["1", "2", "3"]
  digits.length === uniqueDigits.length;    // returns false
  ```

- How to swap two elements in an array destructively?

  ```javascript
  let arr =[1, 2]
  [arr[0], arr[1]] = [arr[1], arr[0]] // returns [2, 1]
  arr; // => [2, 1]
  ```

- How to center a string in the center of a text? `string.padStart(arg1, arg2)`, when you use this, notice that **the first argument is - the total length of your string + the length of stuff you want to pad**:

  ```javascript
  "hi".padStart(5, '0') // => "000hi"
  "hi".padStart(1, '0') // => "hi"
  ```

  if the first argument is less than your string's length, nothing fancy returns, instead returns the original string. 

  `string.padStart` is non-mutating.

- Destructively remove the first element of an array? destructively add an element to the front of an array?
  
  - `array.shift()`; `array.unshift('hi')`

- When a question is like: compare two things, determine whether they're equal? 

  - You should compare primitive values, like two strings, don't compare two arrays.
  -  We can't compare the array, because they are forever two different arrays, occupy difference space
    in memory. They just happen to have the same array value.
    What we should compare is string, cuz if two primitive values are the same, they must occupy the 
    same space in memory, indeed they must be one string, a string is of course equal to itself. e.g.:

  ```javascript
  let a = "hi";
  let b = "hi";
  a === b // true
  
  let c = [1,2];
  let d = [1,2];
  c === d // false
  ```

- How to remove all repeated letters in a string, returns a all-letters-distinct string?
  - use `[...new Set(string)]` , returns an array with no repeated element
  - `[...new Set(array)]` can also work on Array.

- Spread syntax: allows elements to be expanded out from an array
- Rest syntax: places a range of elements into an array

- How to test whether *all* elements in the array satisfy some conditions?

  ```javascript
  [1, 2, 3].every(i => i > 4) // false
  ```

- What does `Array.prototype.find()` return?
  - returns the *first* element that satisfies the callback
  - if no such el, return `undefined`

- `for...of + iterable`: things after `of` must be iterable, for example: an array

  ```javascript
  let arr = [1, 2, 3];
  for (let num of arr) {
  	console.log(num);
  }
  // 1
  // 2
  // 3
  undefined
  ```

  `for...in...`: things after `in` are non-iterable, for example, an object

  ```javascript
  let result = { car: 4, truck: 3, SUV: 1, motorcycle: 2 };
  for (let key in result) {
  	console.log(`${key} => ${result[key]}`);
  }
  ```

  

