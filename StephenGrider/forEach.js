var colors = ['red', 'blue', 'green'];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

colors.forEach(color => console.log(color));

// Create an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Create a variable to hold the sum
let sum = 0;

// Loop over the array, incrementing the sum variable
numbers.forEach(number => (sum = sum + number));

function adder(number) {
  sum += number;
}

numbers.forEach(adder);

// Print the sum variable
console.log(sum);

// Coding Exercise 1 - Moving away from For Loops
function handlePosts() {
  var posts = [
    { id: 23, title: 'Daily JS News' },
    { id: 52, title: 'Code Refactor City' },
    { id: 105, title: 'The Brightest Ruby' }
  ];

  // for (var i = 0; i < posts.length; i++) {
  //   savePost(posts[i]);
  // }
  posts.forEach(post => savePost(post));
}
