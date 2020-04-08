// Triangle Sides
// A triangle is classified as follows:

// Equilateral: All three sides are of equal length.
// Isosceles: Two sides are of equal length, while the third is different.
// Scalene: All three sides are of different lengths.
// To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than 
// the length of the longest side, and every side must have a length greater than 0. 
// If either of these conditions is not satisfied, the triangle is invalid.

// Write a function that takes the lengths of the three sides of a triangle as arguments, 
// and returns one of the following four strings representing the triangle's classification: 
// 'equilateral', 'isosceles', 'scalene', or 'invalid'.

// Examples:

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(2, 2, 3));        // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"

// rules:
//   - all three sides must > 0, i.e. shortest > 0
//   - shortest + middle > longest

// algo:
//   - if any side <= 0 or the max side >= the sum of (other two), return "invalid"
//   - else
//     - find the max and min, assign the rest to variable middle
//     - compare the 3 sides
//       - if max = min = middle, return "equilateral"
//       - if max != min != middle, return "scalene"
//       - else, return "isosceles"

// I was immediately on the right track, the tricky part for me is how to get the middle side
function triangle(s1, s2, s3) {
  let perimeter = s1 + s2 + s3;
  let sides = [s1, s2, s3];
  let longest = Math.max(...sides);
  let shortest = Math.min(...sides);
  let mid = perimeter - longest - shortest; // ahh this is easy and smart!
  
  if (sides.includes(0) || longest >= mid + shortest) return "invalid";
  if (longest === shortest && shortest === mid) {
    return "equilateral";
  } else if (longest !== mid && mid !== shortest && longest !== shortest) {
    return "scalene";
  } else {
    return "isosceles";
  }
}

// ls sol: 3 functions, reaching goals respectively
function triangle(side1, side2, side3) {
  let perimeter = side1 + side2 + side3;
  let longest = Math.max(side1, side2, side3);
  let shortest = Math.min(side1, side2, side3);
  let middle = perimeter - longest - shortest;

  if (isValid(shortest, middle, longest)) {
    return getTriangleType(side1, side2, side3);
  } else {
    return "invalid";
  }
}

function isValid(shortest, middle, longest) {
  return shortest > 0 && shortest + middle > longest;
}

function getTriangleType(side1, side2, side3) {
  if (side1 === side2 && side2 === side3) {
    return "equilateral";
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    return "isosceles";
  } else {
    return "scalene";
  }
}
