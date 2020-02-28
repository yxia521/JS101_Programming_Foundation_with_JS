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