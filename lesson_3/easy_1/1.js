// Question 1
// Will the code below raise an error?

let numbers = [1, 2, 3];
numbers[6] = 5; 
// No, JS treats array slots 3 thru 5 as empty slots
// If we look at numbers => [ 1, 2, 3, <3 empty items>, 5 ]

// Bonus:

let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];  // what will this line return?

// returns undefined, but the slot is still empty, which means it doesn't have
// a value, not even undefined.

// If you want to add a element: undefined. We can: number[5] = undefined;
// Now the array is => [ 1, 2, 3, <2 empty items>, undefined, 5 ], there's an 
// element undefined at index of 5, it's not empty now.

