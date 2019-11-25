const numbers = [1, 2, 3];

const doubleNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  doubleNumbers.push(numbers[i] * 2);
}

const doubled = numbers.map(number => number * 2);

console.log(doubleNumbers);

console.log(doubled);

const cars = [
  { model: 'Buick', price: 'Cheap' },
  { model: 'Camaro', price: 'Expensive' }
];

const prices = cars.map(car => car.price);

console.log(prices);

// Coding Exercise 1 - Plucking Values
var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' }
];

var heights = images.map(image => image.height);

console.log(heights);

// Coding Exercise 1 - Calculating Values with Map
var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map(trip => trip.distance / trip.time);

console.log(speeds);
