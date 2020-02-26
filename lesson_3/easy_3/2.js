// What will the following code output? Answer without running the code.

console.log([1, 2, 3] + [4, 5]);
// My answer '12345'

// yet: '1,2,34,5'

// works for Ruby, but not JS. + is not for Array Concatenation.
// + first converts array to string '1, 2, 3' and '4, 5' respectively
// then '1, 2, 3' + '4, 5' evaluates to '1, 2, 34, 5'
