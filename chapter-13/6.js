//13.329
const fruits = ["Apple", "Banana", "Cherry", "Date"];
const slicedFruits=fruits.slice(1,3);
console.log(slicedFruits);

//13.330
const cars = ["Tesla", "BMW", "Toyota", "Ford"];
const selectedCars=cars.slice(0,2);
console.log(selectedCars);

//13.331
const movieList = ["Inception", "Titanic", "Joker", "Avatar", "Interstellar"];
movieList.slice(2,2,"Batman","Superman");
console.log(movieList);

//13.332
const players = ["Messi", "Ronaldo", "Neymar", "Mbappe"];
players.slice(2,1,"Halland");
console.log(players);
