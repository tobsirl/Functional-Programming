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

// Coding Exercise 2 - Arrow Functions Aren't Always a Solution
const profile = {
  name: 'Alex',
  getName: function() {
    return this.name;
  }
};

profile.getName(); //?

function plusMinus(arr) {
  const length = arr.length;
  let pos = 0;
  let neg = 0;
  let zero = 0;

  Array.from(
    arr.map(el => {
      if (el === 0) {
        zero++;
      } else if (el > 0) {
        pos++;
      } else {
        neg++;
      }
    })
  );

  console.log(`${parseFloat(pos / length).toPrecision(7)}`);
  // ${parseFloat(neg / length).toPrecision(7)}
  // ${parseFloat(zero / length).toPrecision(7)}
  // `;
}

plusMinus([-4, 3, -9, 0, 4, 1]); //?

function miniMaxSum(arr) {
  const arrCopy = [...arr];

  const min = Array.from(arr.sort((a, b) => a - b).splice(0, 4));
  const max = Array.from(arrCopy.sort((a, b) => a - b).splice(1, 5));

  const minSum = min.reduce((acc, curr) => acc + curr, 0);
  const maxSum = max.reduce((acc, curr) => acc + curr, 0);
  console.log(minSum, maxSum);
}

miniMaxSum([1, 2, 3, 4, 5]); //?
miniMaxSum([7, 69, 2, 221, 8974]); //?

function birthdayCakeCandles(ar) {
  // let maxCount = 0; //?

  // for (let i = 0; i < ar.length; i++) {
  //   if (ar[i] === ar[ar.length - 1]) {
  //     maxCount++;
  //   }
  // }
  // return maxCount;
  let count = 0;
  // return ar.reduce(
  //   (acc, curr) => (acc[curr] === acc[curr] ? count + 1 : count + 0),
  //   0
  // );
  // return ar.map(x => (count[x] = (count[x] || 0) + 1));
  let tallest = Math.max(...ar); //?

  return ar.filter(num => num == tallest).length; 
}

birthdayCakeCandles([3, 2, 1, 3]); //?
