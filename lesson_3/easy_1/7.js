// Determine whether the name Dino appears in the strings below):

let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

// 1)
console.log(str1.includes('Dino')); // false
console.log(/Dino/.test(str2));     // true

// 2)
console.log(str1.match(/Dino/) !== null); // if false, includes Dino
console.log(str2.match(/Dino/) !== null); // if true, not include
// to make it more descriptive, use !==, instead ===

// 3)
console.log(str1.indexOf('Dino') !== -1); // if not include, indexOf returns -1
console.log(str2.indexOf('Dino') !== -1);
