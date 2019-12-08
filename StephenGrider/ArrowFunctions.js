// ES5
// const double = function(number) {
//   return 2 * number;
// };

// ES6
const double = number => 2 * number;

double(8);

// ES6
const team = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function() {
    return this.members.map(member => {
      return `${member} is on team ${this.teamName}`;
    });
  }
};

team.teamSummary(); //?

// Coding Exercise 1 - Refactoring Keyword Functions
const fibonacci = n => {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

fibonacci(5); //?
