//21.486
class Hotel {
  constructor(name, rooms, costPerNight) {
    this.name = name;
    this.rooms = rooms;
    this.costPerNight = costPerNight;
  }
  getName() {
    return this.name;
  }
}
const myHotel = new Hotel("Ocean View", 50, 120);
console.log(myHotel.getName());

//21.487
class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
  getSalary() {
    return this.salary;
  }
}
const employee1 = new Employee("EMTIAZ", "Manager", 50000);

//21.488
class Library {
  constructor() {
    this.books = [];
  }
  addBook(book) {
    this.books.push(book);
  }
  hasBook(book) {
    return this.books.includes(book);
  }
}
const myLibrary = new Library();
myLibrary.addBook("marhaba javascript");
console.log(myLibrary.hasBook("marhaba javascript"));
console.log(myLibrary.hasBook("Python Essentials"));

//21.489
class ShoppingCart {
  constructor() {
    this.products = [];
    this.totalPrice = 0;
  }

  addToCart(productName, price) {
    this.products.push(productName);
    this.totalPrice += price;
  }

  getTotalPrice() {
    return this.totalPrice;
  }
}

const cart = new ShoppingCart();
cart.addToCart("Laptop", 1000);
cart.addToCart("Mouse", 50);
console.log(cart.products);
console.log(cart.getTotalPrice());
