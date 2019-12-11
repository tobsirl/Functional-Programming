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

// Grading Students
function gradingStudents(grades) {
  let newGrades = [];
  // Write your code here
  grades.map(grade => {
    if (grade < 38) {
      newGrades.push(grade);
    } else if (Math.ceil(grade / 5) * 5 - grade < 3) {
      newGrades.push(Math.ceil(grade / 5) * 5);
    } else if (Math.ceil(grade / 5) * 5 - grade === 3) {
      newGrades.push(grade);
    }
  });
  return newGrades;

  // return grades.map(grade =>
  //   grade < 38 || grade % 5 < 3 ? grade : Math.ceil(grade / 5) * 5
  // );
}

gradingStudents([73, 67, 38, 33]); //?
