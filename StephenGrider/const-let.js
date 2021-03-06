// ES5
// var name = 'Jane';
// var title = 'Software Engineer';
// var hourlyWage = 40;

// ES6
const name = 'Jane';
let title = 'Software Engineer';
let hourlyWage = 40;

// Example const let, count the number of vowels
function count(targetString) {
  var characters = ['a', 'e', 'i', 'o', 'u'];
  var number = 0;

  for (var i = 0; i < targetString.length; i++) {
    if (characters.includes(targetString[i])) {
      number++;
    }
  }
  return number;
}

count('aeiobzxceiaipbiox'); //?

// Coding Exercise 1 - A Constant Exercise of Letting Variables Be Variables
const name1 = 'Jake';
let age = 23;
const dateOfBirth = '10/4/79';

// Coding Exercise 2 - Const/Let Refactoring
const statuses = [ 
  { code: 'OK', response: 'Request successful' },
  { code: 'FAILED', response: 'There was an error with your request' },
  { code: 'PENDING', response: 'Your reqeust is still pending' }
];
let message = '';
let currentCode = 'OK';

for (let i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
}
