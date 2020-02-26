// Back in the stone age (before CSS), we used spaces to align things on the screen. 
// If we have a 40-character wide table of Flintstone family members,
// how can we center the following title above the table with spaces?

let title = "Flintstone Family Members";
console.log(title.padStart(Math.floor((40 - title.length) / 2) + title.length, ' '));

// ' ' is optional, cuz if no 2nd argument passed in, padStart pads spaces ' ' by default
