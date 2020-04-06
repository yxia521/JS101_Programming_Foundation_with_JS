// Staggered Caps (Part 2)
// Modify the function from the previous exercise so it ignores non-alphabetic characters when determining whether it should uppercase or lowercase each letter. The non-alphabetic characters should still be included in the return value; they just don't count when toggling the desired case.

// Example:

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);

// ls sol
function staggeredCase(string) {
  let needUpper = true;

  return string
    .split("")
    .map(function(char) {
      if (char.match(/[a-z]/i)) {
        let newChar;
        if (needUpper) {
          newChar = char.toUpperCase();
        } else {
          newChar = char.toLowerCase();
        }

        needUpper = !needUpper;
        return newChar;
      } else {
        return char;
      }
    })
    .join("");
}

// student's sol
function staggeredCase(string) {
  let needsUpperCase = true;
  let result = '';
  for (let chr of string) {
    if (/[a-z]/i.test(chr)) {
      chr = needsUpperCase ? chr.toUpperCase() : chr.toLowerCase();
      needsUpperCase = !needsUpperCase;
    }
    result += chr;
  }
  return result;
}
