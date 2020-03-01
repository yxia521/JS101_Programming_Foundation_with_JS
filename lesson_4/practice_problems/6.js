// How does Array.prototype.fill work? Is it destructive? How can we find out?

let arr = [1, 2, 3, 4, 5]
arr.fill(1, 1, 5);

// fill changes all elements in an array to a static value, from a start index
// to an end index, returns the modified array destructively.

// fill with from index 1 until index 5, so returns [1, 1, 1, 1, 1] destructively.
