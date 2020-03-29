// How old is Teddy?
// Build a program that randomly generates Teddy's age, and logs it to the console. 
// Have the age be a random number between 20 and 120 (inclusive).

// Example Output:
// Teddy is 69 years old!
   
// generate random number from a min to a max number (inclusive)
// in this case [20, 120]

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
}

console.log(`Teddy is ${getRandomInteger(20, 120)} years old!`);
