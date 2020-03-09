// Even Numbers
// Log all even numbers from 1 to 99, inclusive, to the console. 
// Log all numbers on separate lines.

// 1)
[...Array(99).keys()].map(x => ++x).forEach(i => { // [...Array(99).keys()].map(x => ++x) => [1, ..., 99]
  if (i % 2 === 0) {
    console.log(i);
  }
});

// 2)
for (let i = 2; i < 100; i += 2) {
  console.log(i);
}

// 3): ls sol
for (let i = 1; i < 100; i++) {
  if (i % 2 === 1) continue;
  console.log(i);
}
