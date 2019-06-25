// ! Working with arrays and lists
// Recall that in the previous article, we talked about DRY code.
// We saw that functions are useful for bundling up sets of actions
// that might be repeated. But what if we’re repeating the same
// function lots of times? For example:

function addColour(colour) {
  var rainbowEl = document.getElementById('rainbow');
  var div = document.createElement('div');
  div.style.paddingTop = '10px';
  div.style.backgroundColour = colour;
  rainbowEl.appendChild(div);
}

addColour('red');
addColour('orange');
addColour('yellow');
addColour('green');
addColour('blue');
addColour('purple');

// That addColour function is called rather a lot. We are repeating ourselves—something
// we wish to avoid. One way to refactor it is to move the list of colours into an array,
// and call addColour in a for-loop:

var colours = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

for (var i = 0; i < colours.length; i = i + 1) {
  addColour(colours[i]);
}

// This code is perfectly fine. It gets the job done, and it is less repetitive than the previous 
// version. But it’s not particularly expressive. We have to give the computer very specific instructions
// about creating an index variable and incrementing it, and checking to see if it’s time to stop. 
// What if we could wrap all that for-loop stuff into a function?

// !For-Each
// Since JavaScript lets us pass a function as a parameter to another function, writing a forEach function is relatively straightforward:
function forEach(callback, array) {
  for (var i = 0; i < array.length; i = i + 1) {
      callback(array[i], i);
  }
}

// This function takes another function, callback, as a parameter and calls it on every item in the array.

// Now, with our example, we want to run the addColour function on each item in the array. Using our new 
// forEach function we can express that intent in just one line:

forEach(addColour, colours);

// Calling a function on every item in an array is such a useful tool that modern implementations of JavaScript
// include it as a built in method on arrays. So instead of using our own forEach function, we could use the built in one like so:
var colours = [
  'red', 'orange', 'yellow',
  'green', 'blue', 'purple'
];
colours.forEach(addColour);