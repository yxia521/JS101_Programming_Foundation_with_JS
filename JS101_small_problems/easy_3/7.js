// Double Doubles
// A double number is an even-length number whose left-side digits are exactly the same as its 
// right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, 
// whereas 444, 334433, and 107 are not.

// Write a function that returns the number provided as an argument multiplied by two, 
//unless the argument is a double number; return double numbers as-is.

// Examples:

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676

// algo:
// if double number, return as is
// if not double number, return (number * 2)

// no need to explicit the condition of even/odd length, cuz if odd length, 
// the firstPart must not equal to secondPart

function twice(num) {
  let firstPart = String(num).slice(0, String(num).length / 2);
  let secondPart = String(num).slice(String(num).length / 2);
  
  if (firstPart === secondPart) return num;
  return num * 2;
}
