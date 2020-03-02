// sort by subarray's sum

let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];

console.log(
  scores.sort((a, b) => {
    let totalAScore = a.reduce((acc, num) => acc + num);
    let totalBScore = b.reduce((acc, num) => acc + num);
    return totalAScore - totalBScore;
  })
);

// [ [ 1, 4, 2 ], [ 3, 6, 4 ], [ 6, 8, 9 ] ]
