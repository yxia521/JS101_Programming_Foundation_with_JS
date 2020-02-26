// Consider the following object:

let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
// Create an array from this object that contains only two elements: Barney's name and Barney's number:

let arr = (Object.entries(flintstones))[2];
console.log(arr);
[ 'Barney', 2 ]

// --- ls sol ---
let result = Object.entries(flintstones).filter(pair => pair[0] === 'Barney').shift();
console.log(result);

// before shift, we got a nested array [ [ 'Barney', 2 ] ], shift() removes
// the first element of this outer array, and returned it, which is [ 'Barney', 2 ]
// then we log this result.

