import p from 'p';
// Rest
function addNumbers(...numbers) {
  return numbers.reduce((sum, number) => sum + number);
}

addNumbers(1, 2, 3, 4, 5, 6); //?

// Spread
const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];
const fallColors = ['fire red', 'fall orange'];

defaultColors.concat(userFavoriteColors); //?

const newArray = [
  'blue',
  ...fallColors,
  ...defaultColors,
  ...userFavoriteColors
]; //?

function validateShoppingList(...items) {
  if (items.indexOf('milk') < 0) {
    return ['milk', ...items];
  }

  return items;
}

validateShoppingList('oranges', 'bread', 'eggs');

const MathLibrary = {
  calculateProduct(...rest) {
    console.log(`Please use the multiply method instead`);
    return this.multiply(...rest);
  },
  multiply(a, b) {
    return a * b;
  }
};

// Exercise 1 - Many Many Arguments
function product(...nums) {
  const numbers = [...nums];

  return numbers.reduce((acc, number) => {
    return acc * number;
  }, 1);
}

product(1, 2, 3, 4, 5, 6); //?

// Exercise 2 - Spreadin' Arrays
function join(array1, array2) {
  return [...array1, ...array2];
}

join([1, 2, 3], [4, 5, 6]); //?

// Exercise 3 - Mixing Rest and Spread
function unshift(array, ...letters) {
  return letters.concat(array); 
}

unshift([p, a, u, l], t, o, b, i, n); //?
