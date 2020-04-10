// Member Directory
// Caroline manages the member directory of her club and decided to implement 
// a program she can use for doing that. Since the club is not very big, 
// it's sufficient for her to keep the members' names and phone numbers in an object. 
// Later she wants to add functionality that allows her to write this object to a file.

// One requirement Caroline takes very seriously is input validation. 
// She intended for her code to strictly require that only alphabetic letters be 
// included in the members' first and last names, separated by a space. But upon making 
// a typo when entering the information of the newest member, she realizes that isn't the case.

// Figure out why not and fix the code so that it works as expected. You may also consider 
// writing a few more test cases to insure that the input validation requirement is properly met.

let memberDirectory = {
  'Jane Doe': '323-8293',
  'Margaret Asbury': '989-1111',
  'Callum Beech': '533-9090',
  'Juanita Eastman': '424-1919',
};

function isValidName(name) {
  return (/^\w+ \w+$/).test(name); // \w matches not only (a-z, A-Z), but also (0-9) and (_).
}
// fix
function isValidName(name) {
  return (/^[a-z]+ [a-z]+$/i).test(name); // My initial sol: return !name.match(/[0-9]/g);
}

function isValidPhone(phone) {
  return (/^\d{3}-\d{4}$/).test(phone);
}

function validMemberInfo(name, phone) {
  return isValidName(name) && isValidPhone(phone);
}

function addMember(name, phone) {
  if (validMemberInfo(name, phone)) {
    memberDirectory[name] = phone;
  } else {
    console.log('Invalid member information.');
  }
}

addMember('Laura Carlisle', '444-2223');
addMember('Rachel Garcia', '232-1191');
addMember('Earl 5mith', '331-9191');

console.log(memberDirectory);
