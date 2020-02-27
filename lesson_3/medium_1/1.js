// Let's do some "ASCII Art": a stone-age form of nerd artwork from back in the days before computers had video screens.
// For this practice problem, write a program that creates the following output 10 times,
// with each line indented 1 space to the right of the line above it:

let str = 'The Flintstones Rock!';

// my sol
for (let space = 0; space < 10; space++) {
  console.log(str.padStart(space + str.length));
}

// ls sol
for (let padding = 1; padding <= 10; padding++) {
  console.log(" ".repeat(padding) + str);
}

// The Flintstones Rock!
//  The Flintstones Rock!
//   The Flintstones Rock!
//    The Flintstones Rock!
//     The Flintstones Rock!
//      The Flintstones Rock!
//       The Flintstones Rock!
//        The Flintstones Rock!
//         The Flintstones Rock!
//          The Flintstones Rock!
