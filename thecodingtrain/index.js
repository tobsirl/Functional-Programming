// higher order functions - functions that take functions or return functions
// const multiplier = factor => {
//   return x => x * factor;
// };

// const doubler = multiplier(2);
// const tripler = multiplier(3);

// console.log(doubler(4));
// console.log(tripler(4));

// map()
let vals = [4, 8, 1, 2, 9];
console.log(vals);

const doubled = vals.map(x => x * 2);

console.log(doubled);
