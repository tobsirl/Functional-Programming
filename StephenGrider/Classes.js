// function Car(options) {
//   this.title = options.title;
// }

// Car.prototype.drive = function() {
//   return 'vroom';
// };

// function Toyota(options) {
//   Car.call(this, options);
//   this.color = options.color;
// }

// Toyota.prototype = Object.create(Car.prototype);
// Toyota.prototype.constructor = Toyota;

// Toyota.prototype.honk = function() {
//   return 'honk';
// };

// const car = new Car({ title: 'Focus' });
// car.drive(); //?
// car;

// const toyota = new Toyota({ color: 'red', title: 'Daily Driver' });
// toyota;
// toyota.drive(); //?
// toyota.honk(); //?

// ES6
class Car {
  constructor({ title }) {
    this.title = title;
  }

  drive() {
    return 'vroom';
  }
}

const car = new Car({ title: 'Ford' });

car;
car.drive(); //?