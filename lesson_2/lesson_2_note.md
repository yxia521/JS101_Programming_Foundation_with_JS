Pseudo-code

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

There are two layers to solving any problem:

- The logical problem domain layer. (where pseudo code comes in)
- The syntactical programming language layer.

Formal pseudo code: using keywords

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

  