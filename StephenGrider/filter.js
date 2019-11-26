const products = [
  { name: 'cucumber', type: 'vegetable' },
  { name: 'banana', type: 'fruit' },
  { name: 'celery', type: 'vegetable' },
  { name: 'orange', type: 'fruit' }
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

const fruits = products.filter(fruit => fruit.type === 'fruit');

console.log(fruits);
