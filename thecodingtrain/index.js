const multiplier = factor => {
  return x => x * factor;
};

const doubler = multiplier(2);
const tripler = multiplier(3);

console.log(doubler(4));
console.log(tripler(4));
