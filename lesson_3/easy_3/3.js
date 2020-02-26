// What will the following code output? Answer without running the code.

let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1); // => "hello there"

// More importantly, string is primitive value, is immutable.
// line 4, str1 & str2 are pointing to the same string "hello there"
// line 5, reassign str2, str2 is now referencing "goodbye!", str1 remains pointing to "hello there"
// so line 6 logs "hello there"
