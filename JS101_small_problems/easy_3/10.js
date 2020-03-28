// What Century is That?
// Write a function that takes a year as input and returns the century. The return value should be a string 
// that begins with the century number, and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

// New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.

// Examples:

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"

// algo:
//   - if evenly divisible by 100, don't + 1
//   - else get year / 100, then + 1

function century(year) {
  // get the century
  let century;
  if (year % 100 === 0) {
    century = year / 100;
  } else {
    century = Math.floor(year / 100) + 1;
  }

  // the special case if the last two digits are 11, 12, 13
  if (['11', '12', '13'].includes(String(century).slice(-2))) return `${century}th`;
  
  // add the suffix for general case
  switch (String(century).slice(-1)) {
    case '1': return `${century}st`;
    case '2': return `${century}nd`;
    case '3': return `${century}rd`;
    default: return `${century}th`;
  }
}

// ----- ls sol (3 functions to reach their own goal) -----

// get the century
function century(year) {
  let centuryNumber = Math.floor(year / 100) + 1;

  if (year % 100 === 0) {
    centuryNumber -= 1;
  }

  return String(centuryNumber) + centurySuffix(centuryNumber);
}

// add the suffix for general case
function centurySuffix(centuryNumber) {
  if (catchWithTh(centuryNumber % 100)) {
    return 'th';
  }

  let lastDigit = centuryNumber % 10;
  switch (lastDigit) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

// the special case if the last two digits are 11, 12, 13
function catchWithTh(lastTwo) {
  return lastTwo === 11 || lastTwo === 12 || lastTwo === 13;
}

// ----- my second try by using multiple functions -----
function century(year) {
  let century;
  if (year % 100 === 0) {
    century = year / 100;
  } else {
    century = Math.floor(year / 100) + 1;
  }
  
  return String(century) + centurySuffix(century);
}

function centurySuffix(century) {
  if (['11', '12', '13'].includes(String(century).slice(-2))) return "th";
  
  let lastDigit = century % 10;
  switch (lastDigit) {
    case 0: return "th";
    case 1: return "st";
    case 2: return "nd";
    case 3: return "rd";
  }
}
