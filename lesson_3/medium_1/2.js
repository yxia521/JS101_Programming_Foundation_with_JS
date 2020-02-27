// Starting with the string，return a new string that swaps the case of all of the letters:

let munstersDescription = "The Munsters are creepy and spooky.";

let allChars = munstersDescription.split('');
let swapCase = [];

allChars.forEach(char => {
  if (char.match(/[a-z]/)) {
    swapCase.push(char.toUpperCase());
  } else if (char.match(/[A-Z]/)) {
    swapCase.push(char.toLowerCase());
  } else {
    swapCase.push(char);
  }
});

console.log(swapCase.join(''));
// "tHE mUNSTERS ARE CREEPY AND SPOOKY."
