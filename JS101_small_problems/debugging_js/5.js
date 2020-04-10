// Range
// We are assigned the task to implement a range function that returns an array of integers 
// beginning and ending with specified start and end numbers. When only a single argument is provided, 
// that argument should be used as the ending number and the starting number should be 0.

// Check our code below. Why do the the example invocations fail with an error saying 
// Maximum call stack size exceeded? Can you fix the code?

function range(start, end = -1) {
  let range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

// function has same name, the second one overrides the first one, JS always run this one
function range(end) {
  return range(0, end);
}

// Examples

console.log(range(10, 20));
console.log(range(5));

// fix
// ls sol
function range(start, end = -1) {
  if (end === -1) { // this part
    end = start;
    start = 0;
  }
  
  let range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

// my sol: if takes only 1 argument, function takes it as the first argument for granted
function range(start, end = 0) {
  if (!end) { // 0 is falsy
    end = start;
    start = 0;
  }
  
  let range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}
