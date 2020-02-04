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
