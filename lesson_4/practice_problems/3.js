// The following code differs slightly from the above code. What is the return value of map in this case? Why?

[1, 2, 3].map(num => num * num);

// [1, 4, 9]
// We write the callback in a one-line form. In this case, we can omit return keyword,
// but JS evaluates this as explicit return does, it's the same as:
// [1, 2, 3].map(num => {
//   return num * num;
// })
// So callback returns the value of current number times current number, which is 
// 1, 4, 9 in each iteration respectively, and map returns a new array contains these three elements.

