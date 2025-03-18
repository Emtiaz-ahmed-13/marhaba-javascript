// 8.203
const headphone = {
    brand: "Sony",
    price: 3000,
    color: "red"
};
Object.freeze(headphone);
headphone.model = "WH-1000XM4"; 
console.log(headphone); 

// 8.204
const player = {
    name: 'Messi',
    goals: 800,
    club: 'Inter Miami'
};
Object.freeze(player);
player.age = 36;  
console.log(player); 

// 8.205
const book = {
    title: 'Harry Potter',
    auther: 'JK Rowling',
    page: '500'
};
Object.seal(book);
book.price = 500; 
console.log(book);

// 8.206
const gadget = {
    name: 'iphone',
    price: 100000,
    color: 'black'
};
delete gadget.color; 
console.log(gadget); 

// 8.207
const animal = {
    name: "Tiger",
    location: "Sundarban"
};
Object.freeze(animal);
animal.location = "Amazon"; 
console.log(animal);

// 8.208
const food = {
    name: "pizza",
    price: 500,
    size: "large"
};
Object.freeze(food); 
food.calories = 300;
food.price = 600; 
console.log(food);
