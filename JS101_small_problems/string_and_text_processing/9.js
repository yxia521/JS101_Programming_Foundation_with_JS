// Search Word (Part 1)
// Write a function that takes a word and a string of text as arguments, 
// and returns an integer representing the number of times the word appears in the text.

// You may assume that the word and text inputs will always be provided.

// Example:

// const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
// laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae 
// vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
// sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, 
// qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora 
// incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum 
// exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem 
// vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui 
// dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text));      // 3

function searchWord(word, text) {
  let count = 0;
  text.split(' ').forEach(el => {
    if (el.toLowerCase() === word) {
      count += 1;
    }
  });
  return count;
}

// or use filter, then calculate the length of filtered array
function searchWord(word, text) {
  return text.split(' ').filter(el => el.toLowerCase() === word).length;
}

// ls sol: RegExp()
function searchWord(word, text) {
  let regex = new RegExp(word, 'gi');
  return text.match(regex) ? text.match(regex).length : 0;
}
