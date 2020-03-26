// Madlibs
// Madlibs is a simple game where you create a story template with "blanks" for words. 
// You, or another player, then construct a list of words and place them into the story, 
// creating an often silly or funny story as a result.

// Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective, 
// and injects them into a story that you create.

// Example:

// Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly

// console output:
// Do you walk your blue dog quickly? That's hilarious!
// The blue dog walks quickly over the lazy dog.
// The dog quickly walks up blue Joe's turtle.

function madlib() {
  const readline = require('readline-sync');
  let noun = readline.question('Enter a noun: ');
  let verb = readline.question('Enter a verb: ');
  let adj = readline.question('Enter an adjective: ');
  let adv = readline.question('Enter an adverb: ');
  
  console.log(`Do you ${verb} your ${adj} ${adv}? That's hilarious!`);
  console.log(`The ${adj} ${noun} ${verb}s over the lazy dog.`);
  console.log(`The ${noun} ${adv} ${verb}s up ${adj} Joe's turtle.`);
}

madlib();
