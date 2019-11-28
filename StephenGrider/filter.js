const products = [
  { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
  { name: 'banana', type: 'fruit', quantity: 10, price: 15 },
  { name: 'celery', type: 'vegetable', quantity: 30, price: 9 },
  { name: 'orange', type: 'fruit', quantity: 3, price: 5 }
];

const filteredProducts = [];

// for (let i = 0; i < products.length; i++) {
//   if (products[i].type === 'fruit') {
//     filteredProducts.push(products[i]);
//   }
// }

for (fruit of products) {
  if (fruit.type === 'fruit') {
    filteredProducts.push(fruit);
  }
}

console.log(filteredProducts);

const fruits = products.filter(product => product.type === 'fruit');

console.log(fruits);

// Type is 'vegetable' quantity is greater than 0, price is less than 10
const complexFilter = products.filter(
  product =>
    product.type === 'vegetable' && product.quantity > 0 && product.price < 10
);

console.log(complexFilter);

const post = { id: 4, title: 'New Post' };

const comments = [
  { postId: 4, content: 'awesome post' },
  { postId: 3, content: 'it was ok' },
  { postId: 4, content: 'neat' }
];

const commentsForPost = (post, comments) => {
  return comments.filter(comment => comment.postId === post.id);
};

console.log(commentsForPost(post, comments));

// Coding Exercise 1 - Filtering Values
const numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

const filteredNumbers = numbers.filter(num => num >= 50);

console.log(filteredNumbers);

// Coding Exercise 2 - Handling Permissions with Filter
const users = [
  { id: 1, admin: true },
  { id: 2, admin: false },
  { id: 3, admin: false },
  { id: 4, admin: false },
  { id: 5, admin: true }
];

const filteredUsers = users.filter(user => user.admin === true);

console.log(filteredUsers);

// Coding Exercise 3 - Challenging! Implementing 'reject'
function reject(array, iteratorFunction) {
  return array.filter(el => !iteratorFunction(el));
}

const nums = [10, 20, 30];

function greaterThanTen(number) {
  return number > 25;
}

console.log(reject(nums, greaterThanTen));
