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

const posts = [
  { id: 1, title: 'New Post' },
  { id: 2, title: 'Old Post' }
];

const comment = { postId: 1, content: 'Great Post' };

function postForComment(posts, comment) {
  return posts.find(post => post.id === comment.postId);
}

console.log(postForComment(posts, comment));

// Coding Exercise 1 - Finding Admin Users
const usersData = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

const admin = usersData.find(user => user.admin === true);

console.log(admin);

// Coding Exercise 2 - What's Your Balance?
const accounts = [{ balance: -10 }, { balance: 12 }, { balance: 0 }];

const account = accounts.find(account => account.balance === 12);

console.log(account);

// Coding Exercise 3 - Custom findWhere Helper
const ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 }
];

function findWhere(array, criteria) {
  // let prop = criteria.height.split(' ')[0];
  let prop = Object.keys(criteria)[0];
 
  return array.find(el => el[prop] === criteria[prop]); 
}

findWhere(ladders, { height: '25 feet' });

console.log(findWhere(ladders, { height: '25 feet' }));
