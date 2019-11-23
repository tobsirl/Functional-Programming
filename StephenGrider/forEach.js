var colors = ['red', 'blue', 'green'];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

colors.forEach(color => console.log(color));

// Create an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Create a variable to hold the sum
let sum = 0;

// Loop over the array, incrementing the sum variable
numbers.forEach(number => (sum = sum + number));

function adder(number) {
  sum += number;
}

numbers.forEach(adder);

// Print the sum variable
console.log(sum);
