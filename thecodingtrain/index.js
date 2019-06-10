// higher order functions - functions that take functions or return functions
// const multiplier = factor => {
//   return x => x * factor;
// };

// const doubler = multiplier(2);
// const tripler = multiplier(3);

// console.log(doubler(4));
// console.log(tripler(4));

// map()
// let vals = [4, 8, 1, 2, 9];
// console.log(vals);

// const doubled = vals.map(x => x * 2);

// console.log(doubled);

// reduce()
let vals = [5, 4, 1, 2, 9];
let acc = 0;
for (let val of vals) {
  acc += val;
}

// console.log(acc);

function sum(acc, val) {
  console.log(acc);
  return acc + val;
}

(acc, val) => acc + val;

let result = vals.reduce((acc, val) => acc + val, 0);
console.log(result);


