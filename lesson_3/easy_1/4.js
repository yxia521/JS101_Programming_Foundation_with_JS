// Question 4
// Using the following string, create a new string that contains all lowercase
// letters except for the first character, which should be capitalized.

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

let newString = munstersDescription.toLowerCase();
console.log(newString[0].toUpperCase() + newString.slice(1));

// --- ls sol ---
// munstersDescription.charAt(0).toUpperCase +
// munstersDescription.substring(1).toLowerCase();

