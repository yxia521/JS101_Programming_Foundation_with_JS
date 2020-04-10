// Word Ladder
// Gemma and some friends are working on a complex program to generate word ladders, 
// transforming one word into another word one character at a time. The smallest of her tasks 
// is to print the resulting ladder to the screen.

// A "ladder" is simply an array of word strings; Gemma decides to transform this array 
// into a single string where each word within the string is separated by a hyphen ('-'). 
// For example, the array ['pig', 'pie', 'lie', 'lit', 'let'] should be printed as the 
// string 'pig-pie-lie-lit-let'.

// Upon first glance, Gemma's code below looks like it should work. But it throws a 
// TypeError, saying: Cannot read property 'forEach' of undefined. Why is that?

let ladder = ''

['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(word => {
  if (ladder !== '') {
    ladder += '-'
  }

  ladder += word
})

console.log(ladder)  // expect: head-heal-teal-tell-tall-tail

// fix

let ladder = '';

['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(function(word) {
  if (ladder !== '') {
    ladder += '-';
  }

  ladder += word;
});

console.log(ladder);  // head-heal-teal-tell-tall-tail

// This behavior is because JavaScript performs Automatic Semicolon Insertion, 
// which results in the first three lines being parsed as:

// let ladder = ''['head', ... ].forEach()
// Because the statement on line 1 is not explicitly terminated with a semicolon, 
// the array on line 3 is not parsed as an array, but as an accessor on the empty string. 
// Since the empty string does not contain such a property, the result is undefined, 
// on which we then call forEach, resulting in an error.

// Bugs like these are the reason why, in the Stylish JavaScript, we recommend that 
// you always use semicolons when appropriate:

// Semicolons should always terminate a statement. With no semicolon to separate them, 
// JavaScript sometimes sees the next statement as part of the former statement, 
// which leads to undesired behavior.

// *Oh, by the way -- here's something you may or may not have noticed. 
// Other semi-colons are missing as well, but only the one on line 1 causes a problem. 
// That shows automatic semicolon insertion working as intended.
