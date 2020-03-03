- `Array.prototype.sort`: only works on array destructive
  - converts all elements to strings and compares them by Unicode character codes
  - `undefined` are always placed at the end
  - 

- Use `UTF-16` code point to compare string, so that we can use `>` `<` `===` to work with:

  ```javascript
  '+'.charCodeAt(); // 43
  '3'.charCodeAt(); // 51
  '+' < '3';        // true  
  ```

  You may sometimes see people talk about ASCII characters when talking about JS's strings. In fact, it uses UTF-16

  ```javascript
  'A' < 'a' // true, 65 < 97 
  'Z' < 'a' // true, 90 < 97
  '!' < 'A' // true, 33 < 65
  ```

  Useful rules to remember when comparing:

  - Uppercase letters come before lowercase letters (sometimes called **ASCIIbetical** order)
  - Digits and most punctuation come before letters.
  - There are several punctuation characters between the uppercase and lowercase letters, and several more that come after all of the letters.
  - There is an extended ASCII table that contains accented and other characters - this comes after the main ASCII table.
  - All other UTF-16 characters come after the extended ASCII table and have a code point of at least 256.

- `sort` numberically:

  ```javascript
  [2, 11, 9, 4, 107, 21, 1].sort((a, b) => a - b);
  ```

  is the same as:

  ```javascript
  [2, 11, 9, 4, 107, 21, 1].sort((a, b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  }); // => [ 1, 2, 4, 9, 11, 21, 107 ]
  ```

  - Why is this? Because `sort` arranges the relative positions of the two elements using following rules:
    1. If the callback returns a number < `0`, place `a` before `b`
    2. If the callback returns a number > `0`, place `b` before `a`
    3. If the callback returns `0`, leave the relative positions of `a` `b` unchanged

  - As the same token, sort in a descending order:

  ```javascript
  [2, 11, 9, 4, 107, 21, 1].sort((a, b) => b - a);
  ```

  is the same as:

  ```javascript
  [2, 11, 9, 4, 107, 21, 1].sort((a, b) => {
    if (b < a) {
      return -1;
    } else if (b > a) {
      return 1;
    } else {
      return 0;
    }
  }); // => [ 107, 21, 11, 9, 4, 2, 1 ]
  ```

  - If you study the algorithm that `sort` uses, check what `a` `b` is respectively, you'll  see that `sort` does NOT compare every possible pair of values.

**Nested Data Structure**

- Updating collection elements

  ```javascript
  let arr = [[1, 3], [2]];
  arr[1] = 'hi there';
  arr; // => [[1, 3], 'hi there']
  ```

  line 2 permenant changed the second element in `arr` array; it replaced the entire `[2]` inner array with the string `'hi there'`.

  Likewise, a nested array:

  :fire: IMPORTANT:fire:

  ```javascript
  let arr = [[1, 3], [2]];
  arr[0][1] = 5;
  arr; // => [ [ 1, 5 ], [ 2 ] ]
  ```

  :exclamation: The first part, `arr[0]`, is an **element reference** (a pointer, change it will change the original too) that returns the inner array `[1, 3]`.

  :exclamation: The second part, `[1] = 5`, is the same as `[1, 3][1] = 5`, which is an array **element assignment, NOT a reference**.

  `[1, 3][1] = 5` says "change the second element in array `[1, 3]` to `5`"

  As we saw in first example, this is a destructive action, so `arr` now is `[[ 1, 5 ], [ 2 ]]`.

  (Recall that array is object, we can change part of the object)

  (You can think of it as: `arr[0][1]` is reassigned to `5`, and is referencing `5` now)

**Variable reference for nested collections** (variable as pointer)

```javascript
let a = [1, 3];
let b = [2];
let arr = [a, b];
arr; // => [ [ 1, 3 ], [ 2 ] ]

a[1] = 5;
arr; // => [ [1, 5], [2] ]
```

The value of `arr` changed because `a` still points to the same Array object that's in `arr`. When we modified it by replacing `3` with `5`, we were modifying the Array object.

A mental model of variables pointing to objects:

<img src="/Users/xiabingbao1/LaunchSchool/JS101_Programming_Foundation_with_JS/lesson_5/mental_model_var_pointing.png" style="zoom:35%;" />

So when we modify the first array in `arr`, `a` is changed too:

```javascript
arr[0][1] = 8;
arr; // => [ [ 1, 8 ], [ 2 ] ]
a;   // => [ 1, 8 ]
```

In both above cases, we're modifying the object that `a` and `arr[0]` point to; we now have 2 ways to reference the same object. In the 1st example, the object was modified thru `a`, in the 2nd, the object was modified thru `arr[0]`.

**Shallow Copy**

- 2 ways to create shallow copy of array:

  1)

  ```javascript
  let arr = ['a', 'b', 'c'];
  let copyOfArr = arr.slice();
  copyOfArr; // => [ 'a', 'b', 'c' ];
  ```

  2) spread syntax

  ```javascript
  let arr = ['a', 'b', 'c'];
  let copyOfArr = [...arr];
  copyOfArr; // => [ 'a', 'b', 'c' ];
  
  copyOfArrpush('d');
  arr;       // => [ 'a', 'b', 'c' ]
  copyOfArr; // => [ 'a', 'b', 'c', 'd' ]
  ```

  :exclamation: Both techniques create a shallow copy of an array: **ONLY the top level array is copied**.

  When the array contains other objects, like a nested array, then **those objects are shared, NOT copied**. Then some modification on those objects also mutates the original:

  ```javascript
  let arr = [['a'], ['b'], ['c']];
  let copyOfArr = arr.slice(); // works on outer array, elements inside are mutable
  
  copyOfArr[1].push('d');
  
  arr;       // => [ [ 'a' ], [ 'b', 'd' ], [ 'c' ] ]
  copyOfArr; // => [ [ 'a' ], [ 'b', 'd' ], [ 'c' ] ]
  ```

- Shallow copying Objects: mutates and returns the first argument

  ```javascript
  let obj = { a: 'foo', b: 'bar' };
  let copyOfObj = Object.assign({}, obj);
  
  copyOfObj; // => { a: 'foo', b: 'bar' }
  ```

  :exclamation:Note that `Object.assign` only creates a shallow copy of the outer object. Chages to nested objects within the copy will be reflected on the original: (same logic as array, shared object)

  ```javascript
  let obj = { a: { b: 'foo' }, c: ['bar'] };
  let copyOfObj = Object.assign({}, obj);
  
  obj['a']['d'] = 'baz';
  copyOfObj; // => { a: { b: 'foo', d: 'baz' }, c: [ 'bar' ] }
  obj;       // => { a: { b: 'foo', d: 'baz' }, c: [ 'bar' ] }
  ```

**Deep Copy**: now matter how you mutate the copied, the original never change.

- JS does not have an explicit method or function for deep copying objects, but there's an indirect way to do it.

- However, this way only works with **nested arrays and plain objects**:

  ```javascript
  let arr = [{ b: 'foo' }, ['bar']];
  let serializedArr = JSON.stringify(arr);       // convert object to string
  let deepCopiedArr = JSON.parse(serializedArr); // convert from string back to obj
  ```

  The `JSON.stringify` function **serializes** any object, including **arrays, that only have primitives, arrays, and plain objects as elements**. Serializing involves converting an object to a string form that can be subsequently converted back into an identical object. The `JSON.parse` function performs that conversion from a string back to an object.

  To verify it's deep copy, we modify the 2nd element of `deepCopiedArr`, which itself is an array, the original should be mutated too, but take a look:

  ```javascript
  deepCopiedArr[1].push('baz');
  deepCopiedArr; // => [ { b: 'foo' }, [ 'bar', 'baz' ] ]
  arr;           // => [ { b: 'foo' }, [ 'bar' ] ]
  ```

  Sure enough, it's deep copy.

**Freezing Objects**: another example of not affecting objects nested within objects

- Objects can be frozen using `Object.freeze` function to prevent them from being modified. It freezes both arrays and plain objects:

  ```javascript
  let obj = Object.freeze({ a: 'foo' });
  let arr = Object.freeze(['a', 'b', 'c']);
  
  obj['b'] = 'bar';
  obj; // => { a: 'foo' }
  
  arr.push('d'); // => TypeError: Cannot add property 3, object is not extensible
  arr; // => [ 'a', 'b', 'c' ]
  ```

   We cannot modify the object once it's frozen. Interestingly, attempting to mutate a frozen array raises an error, while doing the same with a plain object fails silently. Another one of those JavaScript quirks!

  :speaker: Only mutable objects can be frozen with `Object.freeze` since immutable objects, like integers, are already frozen. We can check whether an object is frozen with the `Object.isFrozen` method:

  ```javascript
  Object.isFrozen('abc'); // => true
  ```

  - What exactly does `Object.freeze` freeze?

  Similar to shallow copy logic, it only freezes the object that is passed to it. If this object contains other objects, these objects won't be frozen. Check:

  ```javascript
  let arr = Object.freeze([[1], [2], [3]]);
  arr[2].push(4);
  arr; // => [[1], [2], [3, 4]]
  ```

**Functions as first class values & higher order function**

- First class values means: 1) you can invoke functions 2) you can also pass them like any other value.

- Imperative approach: telling the interpreter what to do each step of the way

  ```javascript
  // for loop transformation
  let numbers = [1, 2, 3, 4, 5];
  let transformedNumbers = [];
  
  for (let index = 0; index < numbers.length; index += 1) {
    let currentNum = numbers[index];
    let squaredNum = currentNum * currentNum;
  
    transformedNumbers.push(squaredNum);
  }
  
  transformedNumbers; // => [ 1, 4, 9, 16, 25 ]
  ```

- Declarative approach: treat functions as values.

  ```javascript
  // map transformation
  let numbers = [1, 2, 3, 4, 5];
  let transformedNumbers = numbers.map(currentNum => currentNum * currentNum);
  
  transformedNumbers; // => [ 1, 4, 9, 16, 25 ]
  ```

  `map` takes a function as an argument and calls it for each element of the array used to call `map`. 

- Functions that take other function as arguments are called **Higher Order Functions** (`map` here). The arrow function inside of `map` is called callback.

Example 1:

```javascript
[[1, 2], [3, 4]].forEach(arr => console.log(arr[0]));
// 1
// 3
// => undefined
```

:arrow_right: ​`Array.prototype.forEach` is called on the multi-dimensional array `[[1, 2], [3, 4]]`. Each inner array is passed to the callback, in turn, and assigned to the local variable `arr`. 

The element reference operator `[]` is used on the `arr` and it returns the value at index `0` of the current array - in this case the numbers `1` and `3` , respectively. 

The `console.log` function then outputs *a string representation of the number.* (don't forget!!!)

Since this is a single statement callback, the callback's return value is the return value of `console.log(arr[0])` , which is `undefined`. `forEach` doesn't do anything with this returned value though, and, since the return value of `forEach` is always `undefined`, that is what ultimately gets returned. :arrow_left:

| Action                        | Performed on                          | Side Effect                               | Return Value                    | Is Return Value Used?                          |
| :---------------------------- | :------------------------------------ | :---------------------------------------- | :------------------------------ | :--------------------------------------------- |
| method call (`forEach`)       | the outer array                       | None                                      | `undefined`                     | No, but shown on line 4                        |
| callback execution            | Each sub-array                        | None                                      | `undefined`                     | No                                             |
| element reference (`[0]`)     | Each sub-array                        | None                                      | Element at index 0 of sub-array | Yes, used by `console.log`                     |
| function call (`console.log`) | Element at index `0` of the sub-array | Outputs string representation of a Number | `undefined`                     | Yes, used to determine callback's return value |

Example 2:

```javascript
[[1, 2], [3, 4]].map(arr => console.log(arr[0]));
// 1
// 3
// => [undefined, undefined]
```

| Action                        | Performed on                         | Side Effect                                   | Return Value                         | Is Return Value Used?                         |
| :---------------------------- | :----------------------------------- | :-------------------------------------------- | :----------------------------------- | :-------------------------------------------- |
| method call (`map`)           | The outer array                      | None                                          | New array (`[undefined, undefined]`) | No, but shown on line 4                       |
| callback execution            | Each sub-array                       | None                                          | `undefined`                          | Yes, used by `map` for transformation         |
| element access (`[0]`)        | Each sub-array                       | None                                          | Element at index 0 of sub-array      | Yes, used by `console.log`                    |
| function call (`console.log`) | Element at index 0 of each sub-array | Outputs a string representation of an Integer | `undefined`                          | Yes, used as the return value of the callback |

Example 3

Let's mix it up a little and have you try taking apart an example on your own.

```js
[[1, 2], [3, 4]].map(arr => {
  console.log(arr[0]);
  return arr[0];
});
```

On line 1, we're calling `Array.prototype.map` on a nested array, and passing each inner array to the callback and assigning it to local variable `arr`. 

On line 2, we're using the element reference operator on `arr` and it returns the value of number at index `0` of each inner array - in this case `1` and `3`, respectively. We're calling `console.log` function and passing `arr[0]` as an argument to it, it outputs the string representation of `1` and `3` to the console.

On line 3, we're explicitly returning the value of the number that `arr[0]` returns, which is `1` and `3`, since this is the last expression of the callback, it's the return value of the callback.

`map` considers the return value of the callback and performs transformation based on it. So `map` returns a new array with two elements in it - `[1, 3]` as the return value of this program.

:speaker: Note the slight change:

```javascript
[[1, 2], [3, 4]].map(arr => {
  console.log(arr[0]);
  arr[0]; // recall that the callback returns undefined if no explicit return
});

// 1
// 3
// => [undefined, undefined]
```

Example 4:

```javascript
let myArr = [[18, 7], [3, 12]].forEach(arr => {
  return arr.map(num => {
    if (num > 5) {
      return console.log(num);
    }
  });
});

// 18
// 7
// 12
// => undefined, because of variable declaration instead of return value of forEach
```

On line 1, we're declaring a variable `myArr` and assigning it to the return value of `forEach` function calling on a nested array. We're passing each subarray to the outer callback and assigning each subarray to the local variable `arr`.

Within the outer callback, we're calling `map` on the local variable `arr`, passing each number of each subarray to the inner callback and assiginng every number to the local variable `num`. 

On line 3, we're comparing each number of each subarray with `5` - in this case, we're comparing `18`, `7`, `3`, `12` with `5` respectively in every iteration.

On line 4, we're calling `console.log` function and passing above number as an argument to it in every iteration. It returns `undefined`, as it's the last expression of inner callback, `map` uses this return value and returns `[undefined, undefined]`, which is used by the outer callback as the return value.

Since `forEach` has nothing to do with the outer callback's return value, it always returns `undefined` so variable `myArr` is assigned to `undefined`.

Variable declaration always returns `undefined`, which ultimately gets returned.

| Action                              | Performed on                               | Side Effect                                 | Return Value                                                 | Is Return Value Used?                                 |
| :---------------------------------- | :----------------------------------------- | :------------------------------------------ | :----------------------------------------------------------- | :---------------------------------------------------- |
| variable declaration and assignment | n/a                                        | None                                        | `undefined` (variable declaration always evaluates to `undefined`) | No                                                    |
| method call (forEach)               | `[[18, 7], [3, 12]]`                       | None                                        | `undefined`                                                  | Yes, used to assign to `myArr`                        |
| outer callback execution            | Each sub-array                             | None                                        | `[undefind, undefined]`                                      | No                                                    |
| method call (`map`)                 | Each sub-array                             | None                                        | `[undefined, undefined]`                                     | Yes, returned by the outer callback                   |
| inner callback execution            | Element of the sub-array in that iteration | None                                        | `undefined`                                                  | Yes, used to transform the array                      |
| comparison (`>`)                    | Element of the sub-array in that iteration | None                                        | Boolean                                                      | Yes, evaluated by `if`                                |
| method call (`console.log`)         | Element of the sub-array in that iteration | Outputs a string representation of a Number | `undefined`                                                  | Yes, used to determine return value of inner callback |

