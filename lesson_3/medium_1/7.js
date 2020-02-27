// What is the output of the following code?

let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8); // does not mutate the argument answer
}

let newAnswer = messWithIt(answer);

console.log(answer - 8); // 34
