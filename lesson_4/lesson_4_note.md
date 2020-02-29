**String Element Reference**

- `String.slice()` :yellow_heart: LS recommend

  ```javascript
  // 1)
  'abcdefghi'.slice();       // 'abcdefghi'
  
  // 2)
  'abcdefghi'.slice(2);      // 'cdefghi'
  
  // 3)
  'abcdefghi'.slice(2, 5);   // 'cde'
  
  // 4) length + index
  'abcdefghi'.slice(-4, -2); // 'fg'; 9 + (-4) = 5, 9 + (-2) = 7 => (5, 7)
  ```

- `String.substring()`: similar to `slice()` in every way except the following: 

  1. When the start index > end index, `substring` swaps the two arguments, `slice` returns empty string `''`:

  ```javascript
  'abcdef'.substring(3, 1); // 'bc'
  'abcdef'.slice(3, 1);     // ''     
  ```

  2. When either argument is negative, `substring` treats them as `0`, `slice` treats them `length + index`:

  ```javascript
  'abcdefghi'.substring(-4, -2); // '' 
  'abcdefghi'.slice(-4, -2);     // 'fg'
  ```

**Array Element Reference**

- `Array.slice()`: pretty much similar, but returns an array:

  ```javascript
  let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
  arr.slice();     // ['a', 'b', 'c', 'd', 'e', 'f', 'g']
  arr.slice(2);    // ['c', 'd', 'e', 'f', 'g']
  arr.slice(2, 5); // ['c', 'd', 'e']
  ```

**Object Element Reference**

- When initializing an object, the *keys names MUST be unique*. If repeated, the earlier one is overwritten by the latter one.

  ```javascript
  let obj = {fruit: 'apple', vegetable: 'carrot', fruit: 'pear'};
  obj; // { fruit: 'pear', vegetable: 'carrot' }
  ```

- Values can be duplicated:

  ```javascript
  let obj = { apple: 'fruit', carrot: 'vegetable', pear: 'fruit' };
  ```

**Element Reference Gotchas**

- Out of bounds: always return `undefined`

  ```javascript
  let string = 'abcde';
  let array = ['a', 'b', 'c', 'd', 'e'];
  
  string[5]; // => undefined
  array[5];  // => undefined
  
  string[-1]; // => undefined
  array[-1];  // => undefined
  ```

- Invalid object keys:

  ```javascript
  let obj = {a: 'foo', b: 'bar'};
  obj['c']; // => undefined
  ```

  How can we differentiate beweet this vs. a property that has `undefined` as its value? Use `Array.prototype.hasOwnProperty` or `Object.keys`

  ```javascript
  let obj = { a: 'foo', b: 'bar', c: undefined};
  obj.hasOwnProperty('c'); // => true
  obj.hasOwnProperty('d'); // => false
  ```

  ```javascript
  Object.keys(obj).includes('c'); // => true
  Object.keys(obj).includes('d'); // => false
  ```

**String Methods**

- `concat` can take 2 arguments: concats all strings together

  ```javascript
  let a = 'hi';
  let b = 'world';
  a.concat(' ', b); // 'hi world'
  ```

- `includes` can take 2 arguments: specifies which index in the string to start looking for

  ```javascript
  'abcde'.includes('b', 2) // false
  ```

  Even though `abcde` includes `b`, but we start searching from index 2.

- Difference between `charAt` and `[]`: when using indexes for characters that don't exist:

  - `[]` returns `undefined`
  - `charAt` returns an empty string `''`

  ```javascript
  'abc'[5];        // undefined
  'abc'.charAt(5); // ''
  ```

- `charCodeAt`: returns the character code (the number that represents a given character at the machine level) of the character: 

  ```javascript
  'abcdef'.charCodeAt(1) // 98; index 1 is 'b', b's character code is 98
  'abcdef'.charCodeAt()  // 97, the char code for 'a'
  ```

  :speaker: Note: prototype method

- Opponent: `String.fromCharCode`: takes a character code, reutrns the corresponding character

  ```javascript
  String.fromCharCode(97); // 'a'
  ```

  :speaker: Note: static method

**Iterating with for and while loops**

- `continue` in a loop

  - Use a guard clause to exclude the odd numbers
  - :speaker: Guard clause: a conditional statement that protects the body of a loop or function from having to deal with values it doesn't need to handle. It always include a `continue`, `break` or `return` in the body of `if`

  ```javascript
  let numbers = [ 1, 4, 3, 7, 6, 5, 2, 1 ];
  
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 === 1) continue; // guard clause
  
    let square = numbers[index] * numbers[index];
    console.log(square); // 16 36 4
  }
  ```

  :speaker: Note that `continue` doesn't restart the loop, instead, it ends the current iteration and starts the next. In the above example, `continue` doesn't reset `index` to `0` as it would if it restarted the loop. However, since it starts the next iteration, it increments the `index` variable like `index += 1` and tests the termination condition again.

**PEDAC**

```javascript
// PROBLEM:

// Given a string, write a function `palindromeSubstrings` which returns
// all the substrings from a given string which are palindromes. Consider
// palindrome words case sensitive.

// Test cases:

// palindromeSubstrings("supercalifragilisticexpialidocious") == ["ili"]
// palindromeSubstrings("abcddcbA") == ["bcddcb", "cddc", "dd"]
// palindromeSubstrings("palindrome") == []
// palindromeSubstrings("") == []
```

:yellow_heart: Complete pseudocode:

```javascript
// input: a string
// output: an array of substrings
// rules: palindrome words should be case sensitive, meaning "abBA"
//        is not a palindrome

// Algorithm:
//  substrings method
//  =================
//  - create an empty array called `result` which will contain all
//    the required substrings
//  - declare a variable startSubstrIndex and assign 0 to it.
//  - declare a variable endSubstrIndex and assign value of
//    startSubstrIndex + 2 to it.
//  - Enter loop which will break when startSubstrIndex is equal
//      to str.size - 1
//    - Within that loop enter another loop which will break if
//      endSubstrIndex is equal to str.size
//      - append to the result array part of the string from
//        startSubstrIndex to endSubstrIndex
//      - increment `endSubstrIndex` by 1.
//    - end the inner loop
//    - increment `startSubstrIndex` by 1.
//    - reassign `endSubstrIndex` to `startSubstrIndex += 2`
//  - end outer loop
//  - return `result` array

//  isPalindrome? method
//  =====================
//  - Inside the `isPalindrome` method, check whether the string
//    value is equal to its reversed value. You can use the
//    Array.prototype.reverse method along with `split` and `join`.

//  palindromeSubstrings method
//  ============================
//  - declare a result variable and initialize it to an empty array
//  - create an array named substrArray that contains all of the
//    substrings of the input string that are at least 2 characters long.
//  - loop through the words in the substrArray array.
//    - if the word is a palindrome, append it to the result
//      array
//  - return the result array
```

Code:

```javascript
function substrings(str) {
  let result = [];
  let startSubstrIndex = 0;
  let endSubstrIndex = startSubstrIndex + 2;

  while (startSubstrIndex < str.length - 1) {
    while (endSubstrIndex <= str.length) {
      result.push(str.slice(startSubstrIndex, endSubstrIndex));
      endSubstrIndex += 1;
    }

    startSubstrIndex += 1;
    endSubstrIndex = startSubstrIndex + 2;
  }

  return result;
}

function isPalidrome(str) {
  return str === str.split('').reverse().join('');
}

function palindromeSubstrings(str) {
  let result = [];
  let substringsArr = substrings(str);

  substringsArr.forEach(substring => {
    if (isPalidrome(substring)) {
      result.push(substring);
    }
  });

  return result;
}

console.log(
  palindromeSubstrings("supercalifragilisticexpialidocious"));   // ["ili"]
console.log(palindromeSubstrings("abcddcbA"));                   // ["bcddcb", "cddc", "dd"]
console.log(palindromeSubstrings("palindrome"));                 // []
console.log(palindromeSubstrings(""));                           // []
```

**Selection and Transformation**

- Selection: select the `'Fruit'`

  ```javascript
  function selectFruit(object) {
    let newObj = {};
    let keys = Object.keys(object); // ['apple', 'carrot', 'pear', 'broccoli']
  
    for (let count = 0; count < keys.length; count++) {
      if (object[keys[count]] === 'Fruit') {
        newObj[keys[count]] = object[keys[count]];
      }
    }
    return newObj;
  }
  
  let produce = {         // original produce is not mutated
    apple: 'Fruit',
    carrot: 'Vegetable',
    pear: 'Fruit',
    broccoli: 'Vegetable'
  };
  
  console.log(selectFruit(produce)); // { apple: 'Fruit', pear: 'Fruit' }
  ```

- Transformation: 

  multiple number by a specific multiplier if the number's index is odd

  ```javascript
  function doubleOddNumbers(arr, multiplier) {
    let doubleOddIndicesNum = [];
    let index = 0;
    
    while (index < arr.length) {
      if (index % 2 === 1) {
        doubleOddIndicesNum.push(arr[index] * multiplier);
      }
      index += 1;
    }
    return doubleOddIndicesNum;
  }
  
  let myNumbers = [1, 4, 3, 7, 2, 6];
  console.log(doubleOddNumbers(myNumbers, 3)); // [ 12, 21, 18 ]
  ```

  :speaker: Sometimes there's no number meeting the criteria, and we don't  change all elements, we still say that we perform a transformation on the array, that's called an *identity transformation*.

**Array Methods**

- `forEach`

  ```javascript
  [1, 2, 3].forEach(number => {
    console.log(number);
  });
  ```

  `forEach` is a method that's called on the array. `forEach` takes an arrow function as an argument - `() => {...}`, which is called a **callback**. (a callback function is a function that provided as argument for another function/method) 

