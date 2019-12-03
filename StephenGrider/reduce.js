// Classic example of reduce
const numbers = [10, 20, 30];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

sum;

numbers.reduce((sum, number) => sum + number, 0); 
