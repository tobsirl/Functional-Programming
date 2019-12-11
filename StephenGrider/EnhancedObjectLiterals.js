// ES5
function createBookShop(inventory) {
  return {
    inventory: inventory,
    inventoryValue: function() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle: function(title) {
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
