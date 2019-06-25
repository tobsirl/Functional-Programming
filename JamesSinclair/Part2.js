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
