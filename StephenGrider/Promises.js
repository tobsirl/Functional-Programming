const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 2000);
});

promise.then(() => {
  console.log(`Resolved...!`);
});

fetch(`https://jsonplaceholder.typicode.com/posts`).then(data =>
  console.log(data)
);

fetch(`https://jsonplaceholder.typicode.com/posts`)
  .then(res => res.json())
  .then(data => console.log(data));
