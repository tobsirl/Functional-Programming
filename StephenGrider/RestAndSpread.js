function addNumbers(...numbers) {
  return numbers.reduce((sum, number) => sum + number);
}

addNumbers(1, 2, 3, 4, 5, 6); //?
