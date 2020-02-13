// ES5
var expense = {
  type: 'Business',
  amount: '$45 USD'
};

// var type = expense.type;
// var amount = expense.amount;

// ES6
// const { type, amount } = expense;

// type
// amount

// // Destructuring Arguments Object
// // ES5
// var savedFiled = {
//   extension: '.jpg',
//   name: 'repost',
//   size: 14040
// };

// function fileSummary(file) {
//   return `The file ${file.name}${file.extension} is of size ${file.size}`
// }

// fileSummary(savedFiled) //?

// ES6
// function fileSummary({name, extension, size}, {color}) {
//   return `The file ${name}${extension} is of size ${size} ${color}`
// }

// fileSummary(savedFiled, {color: 'red'}) //?

// // Destructuring Arrays
// const companies = [
//   'Goggle',
//   'Facebook',
//   'Uber'
// ];

// Order matters
// const [ name, name2, name3 ] = companies;

// name
// name2
// name3

// const { length } = companies;

// length

// const [company, ...rest] = companies;

// company
// rest

// const companies = [
//   { name: 'Google', location: 'Mountain View' },
//   { name: 'Facebook', location: 'Menlo Park' },
//   { name: 'Uber', location: 'San Francisco' }
// ];

// // var location = companies[0].location;
// // location;

// const [{ location }] = companies;

// location;

// const Google = {
//   offices: ['Mountain View', 'New York', 'London']
// };

// const { offices: [office] } = Google;

// office;

// function signup({ username, password, email, dateOfBirth, city }) {
//   // create a new user
//   return `${username}, ${password}, ${email}, ${dateOfBirth}, ${city}`;
// }

// const user = {
//   username: 'myname',
//   password: 'mypassword',
//   email: 'myemail@gmail.com',
//   dateOfBirth: '1/1/1990',
//   city: 'New York'
// };

// // signup('myname', 'mypassword', 'myemail@gmail.com', '1/1/1990', 'New York');

// // pass as object
// signup(user); //?

const points = [
  [4, 5],
  [10, 1],
  [0, 40]
];

points.map(([x, y]) => {
  return { x, y }; //?
});

// Coding Exercise 1 - Destructuring in Practice
const profile = {
  title: 'Engineer',
  department: 'Engineering'
};

function isEngineer({ title, department }) {
  return title === 'Engineer' && department === 'Engineering';
}
