// How would you order the following array of number strings by descending numeric value (largest number value to smallest)?

let arr = ['10', '11', '9', '7', '8'];

// --- my sol ---
arr.map(string => Number(string)).sort((a, b) => b - a);

// --- ls sol ---
arr.sort((a, b) => Number(b) - Number(a));
// [ 11, 10, 9, 8, 7 ]
