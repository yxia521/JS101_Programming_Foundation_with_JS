// Cute Angles
// Write a function that takes a floating point number representing an angle between 0 and 360 degrees, 
// and returns a string representing that angle in degrees, minutes, and seconds. You should use a 
// degree symbol (˚) to represent degrees, a single quote (') to represent minutes, and a double quote 
//   (") to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.

// Note: your results may differ slightly depending on how you round values, 
// but should generally be within a second or two of the results shown.

var DEGREE = '\xB0'; // hexadecimal escape sequence
var MINUTES_PER_DEGREE = 60;
var SECONDS_PER_MINUTE = 60;
var SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECONDS_PER_MINUTE;

// tricky part is the math
function dms(degreesFloat) {
  var degreesInt = Math.floor(degreesFloat);
  var minutes = Math.floor((degreesFloat - degreesInt) * MINUTES_PER_DEGREE);
  var seconds = Math.floor(
    (degreesFloat - degreesInt - (minutes / MINUTES_PER_DEGREE)) *
    SECONDS_PER_DEGREE
  );

  return String(degreesInt) + DEGREE + padZeroes(minutes) + "'" +
                                       padZeroes(seconds) + '"';
}

function padZeroes(number) {
  var numString = String(number);
  return numString.length < 2 ? ('0' + numString) : numString;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
