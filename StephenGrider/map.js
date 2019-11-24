const numbers = [1, 2, 3];

const doubleNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  doubleNumbers.push(numbers[i] * 2);
}

const doubled = numbers.map(number => number * 2);

console.log(doubleNumbers);

console.log(doubled);
