// Bannerizer
// Write a function that will take a short line of text, and write it to the console log within a box.
// You may assume that the output will always fit in your browser window.

// Examples:

logInBox('To boldly go where no one has gone before.');
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

logInBox('');
// +--+
// |  |
// |  |
// |  |
// +--+

logInBox('❤ Birdie is a perfect angel ❤');

function logInBox(text) {
  let dash = "-";
  let space = ' ';
  console.log(`+-${dash.repeat(text.length)}-+`);
  console.log(`| ${space.repeat(text.length)} |`);
  console.log(`| ${text} |`);
  console.log(`| ${space.repeat(text.length)} |`);
  console.log(`+-${dash.repeat(text.length)}-+`);
}

// further exploration
// Modify this function so that it truncates the message if it doesn't fit inside a maximum width 
// provided as a second argument (the width is the width of the box itself). You may assume no 
// maximum if the second argument is omitted.

function truncateInBox(text, maxLength) {
  let dash = "-";
  let space = ' ';
  if (text.length > maxLength) {
    text = text.slice(0, maxLength);
  }
  
  console.log(`+-${dash.repeat(text.length)}-+`);
  console.log(`| ${space.repeat(text.length)} |`);
  console.log(`| ${text} |`);
  console.log(`| ${space.repeat(text.length)} |`);
  console.log(`+-${dash.repeat(text.length)}-+`);
}

truncateInBox('To boldly go where no one has gone before.', 20);
// +----------------------+
// |                      |
// | To boldly go where n |
// |                      |
// +----------------------+
