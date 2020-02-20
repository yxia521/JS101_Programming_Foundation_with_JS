- Pseudo-code

Example: determines which number in a collection has the greatest value.

```javascript
Given a collection of numbers.

Iterate through the collection one by one.
  - save the first value as the starting value.
  - for each iteration, compare the saved value with the current value.
  - if the current number is greater
    - reassign the saved value as the current value
  - otherwise, if the current value smaller or equal
    - move to the next value in the collection

After iterating through the collection, return the saved value.
```

- There are two layers to solving any problem:
  - The logical problem domain layer. (where pseudo code comes in)
  - The syntactical programming language layer.

- Formal pseudo code: using keywords

```javascript
START

// Given a collection of integers called "numbers"

SET iterator = 1
SET savedNumber = value within numbers collection at space 1

WHILE iterator <= length of numbers
  SET currentNumber = value within numbers collection at space "iterator"
  IF currentNumber > savedNumber
    savedNumber = currentNumber
  ELSE
    skip to the next iteration

  iterator = iterator + 1

PRINT savedNumber

END
```

Then Translating Pseudo-Code to Program Code:

```javascript
function findGreatest(numbers) {
  let savedNumber = numbers[0];

  numbers.forEach(num => {
    if (num > savedNumber) {
      savedNumber = num;
    }
  });

  return savedNumber;
}
```

Remember, pseudocode is a guess at the solution; there's no verification that the logic is correct. You can't do that until you translate it to program code.

```javascript
initialize an empty array

iterate thru the array
- start pushing the first element to the empty array, then 3rd..until nth where n
is the last or the last 2nd element

returns the new array with new elements
```

- ESLint

  - ESLint also provides what developers call a **linter**. Linters inspect your code for potential errors and "code smells," and for adherence to the best practice determined by developers over the years. 

  - ##### Installation and Usage

    ESLint is a Node package, so you install it like any other Node package. If you have the necessary permissions, you should install it as a global package:

    ```javascript
    $ npm install eslint eslint-cli babel-eslint --save-dev
    $ npm uninstall -g eslint             // Omit -g if local install
    $ npm install -g eslint@5.12.1 
    $ ./node_modules/.bin/eslint -v       // check version
    $ ./node_modules/.bin/eslint test.js
    ```

- Calculator.js

  We can now complete the `invalidNumber` function:

  ```js
  function invalidNumber(number) {
    return Number.isNaN(Number(number));
  }
  ```

  The `Number.isNaN()` function takes any JavaScript value and returns the boolean `true` if the value is `NaN`, `false` if it is not. **We check whether `Number(number)` is `NaN` since calling `Number()` on a non-numeric string evaluates to `NaN`**. Thus, `number` is invalid if the conversion results in `NaN`. Note that `Number()` ignores leading whitespace in the `number` string, so `Number(' 34')` returns `34`.

  :speaker: The `readline.question` function returns an empty string when the user doesn't provide any input, and `Number` returns `0` when given an empty string or a string that contains nothing but whitespace. 

  ```javascript
  Number('');    // returns 0
  Number('   '); // returns 0
  ```

- Reading Error Messages from **stack trace**
- Steps to Debugging
  1. reproduce the error
  2. Determine the boundaries of the error
  3. Trace the code
  4. Understand the problem well
  5. Fix
  6. Test the fix

- Debugger in Node.js: `$ node inspect file.js`

  - The simplest way to stop program execution at a particular point in the program is to use the `debugger` statement. The `debugger` statement will cause the program execution to stop at that line. That line is called a **breakpoint**. 
  -  Stop the current debugger session by hitting `Ctrl + c` twice or `Ctrl + d` once

  ```javascript
  let counter = 1;
  
  while (counter <= 5) {
    console.log(counter);
    debugger; // add this line
    counter += 1;
  }
  ```

  Enter `$ node inspect file.js`, then:

  ```javascript
  > 1 (function (exports, require, module, __filename, __dirname) { let counter = 1;
    2
    3 while (counter <= 5) {
  debug> watch('counter') // add this
  debug>
  ```

  then use `cont` to move to next breakpoint, it shows us the value of `debugger` at the breakpoint, which is the `counter`'s value.

- Explicit Coercion 

  `Number`: (test them in Node when you need to)

  ```javascript
  Number('1')         // returns 1
  Number('cat')       // NaN
  Number('')          // 0
  Number({})          // NaN
  Number([])          // 0
  Number([4])         // 4
  Number([undefined]) // 0
  Number([1, 2, 3])   // NaN
  Number(undefined)   // NaN
  Number(null)        // 0
  Number(true)        // 1
  Number(false)       // 0
  ```

  `parseInt` `parseFloat`: *ONLY works with strings*: convert strings into integers/floating point numbers.

  ```javascript
  > parseInt('12')
  12
  > parseInt('12.52')
  12
  > parseInt('12oz')
  12
  > parseInt('+12oz') // while Number('12oz') => NaN
  12
  ```

  `parseInt` accepts 2nd argument, called radix. It specifies the base of the number contained in the string. For example, `10101` in the binary numbering system (base-2) represents the number 21 in decimal (base-10). `parseInt` supports radices from 2 to 36. 

  ```java
  > parseInt('10101', 2)  // 21
  ```

  `parseFloat`: **does not** accept a radix argument.

  ```javascript
  > parseFloat('12 grams')   // 12
  > parseFloat('12.2 grams') // 12.2
  ```

  Coercing to Numbers using the `+` operator: `+` coerces a value to a number

  - unary operators: working with 1 value, such as `!`, `+`, `-`
  - binary operators: working with 2 values, such as  `+`, `-`
  - Ternary operators: working with 3 values `?..:`

  ```javascript
  > +""     // 0
  > +'1'    // 1
  > +'2.3'  // 2.3
  > +[]     // 0
  > +'abc'  // NaN
  ```

  Coercing values to strings

  - :one: `toString`: can use on all data types except `null` and `undefined`

  ```javascript
  > let number = 42
  > number.toString() // or (42).toString()
  '42'
  ```

  However: 

  ```javascript
  > 42.toString()
  SyntaxError: Invalid or unexpected token
  ```

  JS doesn't let you call a method directly on a number literal, the reason for this is that JavaScript interprets the `.` as part of a floating point number.

  When used on booleans:

  ```javascript
  > true.toString()  // 'true'
  > false.toString() // 'false' 
  ```

  `Array.prototype.toString` converts every element of an array to a string, then concatenates them all with a `,` between each string:

  ```javascript
  > [1, 2, 3].toString() // '1,2,3'
  ```

  Note that `Array.prototype.toString` treats `null` and `undefined` elements as empty values:

  ```javascript
  > [1, null, 2, undefined, 3].toString() // '1,,2,,3'
  ```

  - :two: `String`:

  ```javascript
  > String(42)                     // '42'
  > String([1, 2, 3])              // '1,2,3'
  > String({ a: 'foo', b: 'bar' }) // String({}) or String({ a: 'foo'}) or String({ a: 'foo', b: 'bar', c: 'hi' })... all these evaluate to same string below:
  '[object Object]'
  ```

  **`String` 's advantage over `toString`: can work with `null` and `undefined`

  ```javascript
  > String(null)      // 'null'
  > String(undefined) // 'undefined'
  ```

- Implicit Type Coercion

  `==`: 

  ```javascript
  > 1 == true // == coerce true and false to their number equivalents, 1 and 0
  true
  > 3 == true
  false
  > 0 == false
  true
  
  > undefined == null // == considers them equal
  true
  
  > '' == {}
  false
  > '[object Object]' == {} // == coerces {} to string '[object Object]'
  true
  > [] == '' // == coerces [] to ''
  true
  > [] == 0 // == coerces [] to '', then coerces '' to 0
  true
  ```

  `+`:

  ```javascript
  > 'number ' + 1  // 'number 1'coerces 1 to '1'
  
  > '' + [1, 2, 3] // '1,2,3'
  > '' + true      // 'true'
  > '' + undefined // 'undefined'
  > '' + {}        // '[object Object]'
  
  1 + true;       // 2
  1 + false;      // 1
  true + false;   // 1
  null + false;   // 0
  null + null;    // 0
  1 + undefined;  // NaN
  
  [1] + 2;        // "12"
  [1] + '2';      // "12"
  [1, 2] + 3;     // "1,23"
  [] + 5;         // "5"
  [] + true;      // "true"
  42 + {};        // "42[object Object]"
  
  11 > '9';       // true -- '9' is coerced to 9
  '11' > 9;       // true -- '11' is coerced to 11
  123 > 'a';      // false -- 'a' is coerced to NaN; any comparison with NaN is false
  123 <= 'a';     // also false
  true > null;    // true -- becomes 1 > 0
  true > false;   // true -- also becomes 1 > 0
  null <= false;  // true -- becomes 0 <= 0
  undefined >= 1; // false -- becomes NaN >= 1
  ```

  

