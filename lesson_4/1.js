function doubleOddNumbers(arr, multiplier) {
  let doubleOddIndicesNum = [];
  let index = 0;
  while (index < arr.length) {
    if (index % 2 === 1) {
      doubleOddIndicesNum.push(arr[index] * multiplier);
    }
    index += 1;
  }
  return doubleOddIndicesNum;
}


let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(doubleOddNumbers(myNumbers, 3)); // [ 8, 14, 12 ]
