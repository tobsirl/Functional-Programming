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

// Reduce Example - balanced parens
function balancedParens(string) {
  return !string.split('').reduce((previous, char) => {
    if (previous < 0) return previous;
    if (char === '(') return ++previous;
    if (char === ')') return --previous;
    return previous;
  }, 0);
}

balancedParens(')('); //?

// Coding Exercise 1 - Distance Traveled
const trips = [{ distance: 34 }, { distance: 12 }, { distance: 1 }];

const totalDistance = trips.reduce((prev, trip) => prev + trip.distance, 0);

totalDistance;

// Coding Exercise 1 - Reducing Properties
const desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

const deskTypes = desks.reduce(
  (acc, desk) => {
    if (desk.type === 'sitting') acc.sitting++;

    if (desk.type === 'standing') acc.standing++;

    return acc;
  },
  { sitting: 0, standing: 0 }
);

deskTypes;
