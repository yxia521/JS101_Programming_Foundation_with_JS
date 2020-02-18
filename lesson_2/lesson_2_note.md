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
take the first number
take the second number

```

