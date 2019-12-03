// Classic example of reduce
const numbers = [10, 20, 30];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

sum;

numbers.reduce((sum, number) => sum + number, 0);

// --------------------------------------------------------------
const primaryColors = [
  { color: 'red' },
  { color: 'yellow' },
  { color: 'blue' }
];

const colorList = primaryColors.reduce((previous, primaryColor) => {
  previous.push(primaryColor.color);
  return previous;
}, []);

colorList;
