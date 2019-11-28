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
