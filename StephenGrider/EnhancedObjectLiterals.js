// ES5
function createBookShop(inventory) {
  return {
    inventory,
    inventoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle(title) {
      return this.inventory.find(book => book.title === title).price;
    }
  };
}

const inventory = [
  { title: 'Harry Potter', price: 10 },
  { title: 'Eloquent JavaScript', price: 15 }
];

const bookshop = createBookShop(inventory);

bookshop.inventoryValue(); //?
bookshop.priceForTitle('Eloquent JavaScript'); //?

// Coding Exercise 1 - Multiple Properties with Enhanced Notation
const red = '#ff0000';
const blue = '#0000ff';

const COLORS = { red, blue };

// Coding Exercise 2 - Condensing Code with Enhanced Literals
const fields = ['firstName', 'lastName', 'phoneNumber'];

const props = { fields };

// Coding Exercise 3 - Literals in Functions
const canvasDimensions = function(width, initialHeight) {
  const height = initialHeight * 9 /16;
  return { 
    width, 
    height 
  };
}