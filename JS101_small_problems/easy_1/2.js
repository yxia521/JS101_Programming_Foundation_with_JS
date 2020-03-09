// Odd Numbers
// Log all odd numbers from 1 to 99, inclusive, to the console. 
// Log all numbers on separate lines.

// 1)
for (let i = 1; i < 100; i += 2) {
  console.log(i);
}

// // 2)
let i = 1;

do {
  console.log(i);
  i += 2;
} while (i < 100);

// 3)
[...Array(100).keys()].forEach(i => { // [...Array(100).keys()] => [0, 1, 2 ... 99]
  if (i % 2 === 1) {
    console.log(i);
  }
});
