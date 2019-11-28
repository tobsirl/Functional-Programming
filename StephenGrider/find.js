const users = [
  { name: 'Jill' },
  { name: 'Alex' },
  { name: 'Bill' },
  { name: 'Ted' },
  { name: 'Martha' },
  { name: 'Roger' }
];

// Using a for loop
let user;

for (let i = 0; i < users.length; i++) {
  if (users[i].name === 'Bill') {
    user = users[i];
  }
}

console.log(user);

// Example using find()
const findAlex = users.find(user => user.name === 'Alex');

console.log(findAlex);

// find only returns the first record that matches the find case

function Car(model) {
  this.model = model;
}

const cars = [new Car('Buick'), new Car('Camaro'), new Car('Focus')];

const findFocus = cars.find(car => car.model === 'Focus');

console.log(findFocus);
