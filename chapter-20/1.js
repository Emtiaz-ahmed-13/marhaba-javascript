//20.456
const users= [{ id: 1, name: "Mukta", address: "Mirpur" }];
console.log(users[0].name); 

//20.457
const library = {
    name: "City Library",
    books: [
        { id: 1, title: "JavaScript Basics", price: 300 },
        { id: 2, title: "Python Essentials", price: 500 }
    ]
};

console.log(library.books[1].price); 

//20.458
const school={
    name:"Green High",
    students:[
        {id:1, name:"Samiha"},
        {id:2, name:"Kamal"}
    ]
}
console.log(school.students[0].name);

//20.459
const shop = {
    items: [
        { name: "pen", stock: 100 },
        { name: "notebook", stock: 50 }
    ]
};

console.log(shop.items[1].stock); 

//20.460
const movie = {
    title: "Inception",
    director: { name: "Nolan", age: 50 },
    rating: 8.8
};

console.log(movie.director.name); 

//20.461
const game = {
    name: "Football",
    players: [
        { id: 1, name: "Lionel Messi" },
        { id: 2, name: "Cristiano Ronaldo" }
    ]
};

console.log(game.players[0].name); 

//20.462
const vehicle = {
    type: "Car",
    features: {
        color: "Red",
        brand: { name: "Toyota", model: "Corolla" }
    }
};

console.log(vehicle.features.brand.name);





