// ES5
var expense = {
  type: 'Business',
  amount: '$45 USD'
};

// var type = expense.type;
// var amount = expense.amount;

// ES6
const { type, amount } = expense;

type 
amount 

// Destructuring Arguments Object
// ES5
var savedFiled = {
  extension: '.jpg',
  name: 'repost',
  size: 14040
}

// function fileSummary(file) {
//   return `The file ${file.name}${file.extension} is of size ${file.size}`
// }

// fileSummary(savedFiled) //?

// ES6
function fileSummary({name, extension, size}) {
  return `The file ${name}${extension} is of size ${size}`
}

fileSummary(savedFiled) //?