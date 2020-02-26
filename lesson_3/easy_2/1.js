// Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":

let advice = "Few things in life are as important as house training your pet dinosaur. IMPORTANT!";
console.log(advice.replace(/important/gi, 'urgent'));
// => Few things in life are as urgent as house training your pet dinosaur. urgent!


// If the pattern is a string, only the first occurrence will be replaced
// if the pattern is a regex, all occurrences will be replaced
// /../gi, gi means global, and case-insensitive.
