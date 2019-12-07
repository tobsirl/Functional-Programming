// ES5
// function getMessage() {
//   const year = new Date().getFullYear();

//   return 'This year is ' + year;
// }

function getMessage() {
  return `This year is ${new Date().getFullYear()}`;
}

getMessage(); //?

// Coding Exercise 1 - Templete Strings in Practice
function doubleMessage(number) {
  return `Your number doubled is ${2 * number}`;
}

doubleMessage(5); //?

// Coding Exercise 2 - Name Helpers
function fullName(firstName, lastName) {
  return `${firstNam} ${lastName}`;
}
