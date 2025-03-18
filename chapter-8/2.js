//8.186
const player={
    name:'sakib',
    age:35,
    spord:'cricket',
    team:'bangladesh'
}
console.log(player.team);

//8.187
const laptop={
    brand:'Apple',
    price:150000,
    hardDisk:'1TB',
    ram:'16GB',
    screenSize:'15inch'
}
console.log(laptop.screenSize);

//8.188
const favPlace={
    name:'cox\'s bazar',
    distance:'400km',
    popularity:'high'
}
console.log(favPlace.popularity);

//8.189
const phone={
    brand:'Nokia',
    color:'black',
    price:5000
}
console.log(phone.price);

//8.190
const library={
    name:'Public library',
    location:'Dhaka',
    books:50000
}
console.log(library.books);

//8.191
const movie={
    title:'Inception',
    director:'Nolan',
    rating:9
}
console.log(movie.rating);

//8.192
const college={
    name:'ndc',
    established:'1949',
    groups:['science','arts','commerce']
}
console.log(college.groups[1]);

//8.193
const family = {
    father: {
        name: 'Aslam',
        age: 55,
        occupation: 'business'
    },
    mother: {
        name: 'Mukti',
        age: 50,
        occupation: 'housewife'
    },
};

const age = family.mother.age + family.father.age;
console.log(age);
