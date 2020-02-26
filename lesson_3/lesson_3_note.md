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

- How to center some text?

  If we have a 40-character wide table of Flintstone family members, how can we center the following title above the table with spaces?

  ```javascript
  let title = "Flintstone Family Members";
  let leftSpace = Math.floor((40 - title.length) / 2);
  
  title.padStart(leftSpace + title.length, ' '); // ' ' is optional
  ```

  `' '` is optional, cuz if no 2nd argument passed in, `padStart` pads spaces `' '` by default. If you want to pad some other things rather than spaces, you add a 2nd argument, like `'*'`, `0`...

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