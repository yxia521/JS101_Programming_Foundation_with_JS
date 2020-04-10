// Neutralizer
// We wrote a neutralize function that removes negative words from sentences. 
// However, it fails to remove all of them. What exactly happens?

function neutralize(sentence) {
  let words = sentence.split(" ");

  words.forEach(word => {
    if (isNegative(word)) {
      const index = words.indexOf(word);
      words.splice(index, 1); // mutate the array while loop, we should avoid this
    }
  });
  return words.join(" ");
};

function isNegative(word) {
  return ["dull", "boring", "annoying", "chaotic"].includes(word);
}
 
console.log(
  neutralize("These dull boring cards are part of a chaotic board game.")
);
// Expected: These cards are part of a board game.
// Actual: These boring cards are part of a board game.

// fix:
function neutralize(sentence) {
  let words = sentence.split(" ");
  let result = [];

  words.forEach(word => {
    if (!isNegative(word)) {
      const index = words.indexOf(word);
      result.push(words[index]);
    }
  });
  return result.join(" ");
};

// ls sol
function neutralize(sentence) {
  let words = sentence.split(" ");

  return words.filter(word => !isNegative(word)).join(" "); // shorter
};
