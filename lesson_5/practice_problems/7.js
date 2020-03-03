// Given the following code, what will the final values of a and b be? Try to answer without running the code.

let a = 2;
let b = [5, 8];
let arr = [a, b]; // [2, [5, 8]]

arr[0] += 2;
arr[1][0] -= a;
 
console.log(a);   // 2
console.log(b);   // [3, 8]
console.log(arr); // [4, [3, 8]]

// The value of a is not modified cuz we don't reference a at any point.
// arr[0] += 2 modifies arr, we're reassigning arr[0] to a number 4 now, instead of
// containing 2, the value obtained from a.
// Variable a is still there, pointing to number 2. (We can't modify primitive values)
// Since a is not changed, arr[1] is element reference, [0] is element assignment,
// we're reassigning arr[1][0] to a new object with value 3 now.
// Since b is an array, and we're modifying that array by assigning a new value to index 0,  
// the change will also reflect on b, b is modified too.
// (array can be modified)
