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
