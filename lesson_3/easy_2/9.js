// Write two one-line expressions to count the number of lower-case t characters in each of the following strings:

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

console.log(statement1.split('t').length - 1); // 2
console.log(statement2.split('t').length - 1); // 0

// --- ls sol ---
console.log((statement1.match(/t/g) || []).length);
console.log((statement2.match(/t/g) || []).length);

// use short-circuit || logical operator to take care of null case.
// if there's no match, match returns null, which evaluates to false, then
// [] evaluates to true, and will be returned, so line 11 returns [],
// then [].length is 0.

// if there's match, like statement1.match(/t/g) returns ['t', 't'], which evaluates
// to true, [] after || will not run, and || will directly returns ['t', 't']. 
// ['t', 't'].length is 2.
