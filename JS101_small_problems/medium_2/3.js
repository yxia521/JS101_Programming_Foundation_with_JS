// Tri-Angles
// A triangle is classified as follows:

// Right: One angle is a right angle (exactly 90 degrees).
// Acute: All three angles are less than 90 degrees.
// Obtuse: One angle is greater than 90 degrees.
// To be a valid triangle, the sum of the angles must be exactly 180 degrees, and every angle must be greater than 0. 
// If either of these conditions is not satisfied, the triangle is invalid.

// Write a function that takes the three angles of a triangle as arguments, and returns one of the following four 
// strings representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

// You may assume that all angles have integer values, so you do not have to worry about floating point errors. 
// You may also assume that the arguments are in degrees.

// Examples:

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"

// input: three integers
// output: string which tells the triangle type

// algo:
//   - if there's any degree is 0 or total degrees !== 180, return invalid
//   - else
//     - if there's an angle 90, return right
//     - if there's an angle > 90, return obtuse
//     - else return acute

function triangle(a1, a2, a3) {
  let total = a1 + a2 + a3;
  let angles = [a1, a2, a3];
  
  if (angles.includes(0) || total !== 180) return "invalid";
  if (angles.includes(90)) {
    return "right";
  } else if (angles.every(degree => degree < 90)) {
    return "acute";
  } else {
    return "obtuse";
  }
}

// ls sol

function triangle(angle1, angle2, angle3) {
  let angles = [angle1, angle2, angle3];
  if (isValid(angles)) {
    return getTriangleType(angles);
  } else {
    return "invalid";
  }
}

function isValid(angles) {
  let totalAngle = angles.reduce((total, angle) => total + angle);

  let allNonZero = angles.every(angle => angle > 0);

  return totalAngle === 180 && allNonZero;
}

function getTriangleType(angles) {
  if (angles.some(testRightTriangle)) {
    return "right";
  } else if (angles.every(testAcuteTriangle)) {
    return "acute";
  } else {
    return "obtuse";
  }
}

function testRightTriangle(angle) {
  return angle === 90;
}

function testAcuteTriangle(angle) {
  return angle < 90;
}
