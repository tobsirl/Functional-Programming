// * Princple of DRY Don't Repeat Yourself
var el1 = document.getElementById('main-carousel');
var slider1 = new Carousel(el1, 3000);
slider1.init();

var el2 = document.getElementById('news-carousel');
var slider2 = new Carousel(el2, 5000);
slider2.init();

var el3 = document.getElementById('events-carousel');
var slider3 = new Carousel(el3, 7000);
slider3.init();

function initialiseCarousel(id, frequency) {
  var el = document.getElementById(id);
  var slider = new Carousel(el, frequency);
  slider.init();
  return slider;
}

initialiseCarousel('main-carousel', 3000);
initialiseCarousel('news-carousel', 5000);
initialiseCarousel('events-carousel', 7000);

// ! /////////////////////////////////////////////////////

var unicornEl = document.getElementById('unicorn');
unicornEl.className += ' magic';
spin(unicornEl);

var fairyEl = document.getElementById('fairy');
fairyEl.className += ' magic';
sparkle(fairyEl);

var kittenEl = document.getElementById('kitten');
kittenEl.className += ' magic';
rainbowTrail(kittenEl);

function addMagicClass(id) {
  var element = document.getElementById(id);
  element.className += ' magic';
  return element;
}

var unicornEl = addMagicClass('unicorn');
spin(unicornEl);

var fairyEl = addMagicClass('fairy');
sparkle(fairyEl);

var kittenEl = addMagicClass('kitten');
rainbow(kittenEl);

function addMagic(id, effect) {
  var element = document.getElementById(id);
  element.className += ' magic';
  effect(element);
}

addMagic('unicorn', spin);
addMagic('fairy', sparkle);
addMagic('kitten', rainbow);
