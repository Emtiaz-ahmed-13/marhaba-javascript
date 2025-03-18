//8.194
const book = {
    name: 'marhaba javascript',
    auther: 'jankar mahbub',
    price: 630
};

for (const key in book) {
    console.log(key, book[key]);
}

//8.195
const article = {
    title: "Learning JS",
    category: "Programming",
};

for (const key in article) {
    console.log(key, article[key]);
}

//8.196
const laptop = {
    brand: "Dell",
    model: "Inspiron",
    price: 45000
};

for (const key in laptop) {
    console.log(key, laptop[key]);
}

//8.197
const phone = {
    brand: 'Samsung',
    model: 'GalaxyS21',
    price: 85000
};

for (const key in phone) {
    console.log(phone[key]); 
}

//8.198
const bike = {
    brand: "hero",
    price: "120000",
    modle: "splendor"
};

for (const key in bike) {
    console.log(bike[key]); 
}

//8.199
const books = {
    book1: "Harry Potter",
    book2: "The Hobbit",
    book3: "Game of Thrones"
};

for (const key in books) {
    console.log(books[key]);
}

//8.200
const numbers = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
};

for (const key in numbers) {
    console.log(numbers[key]);
}

//8.201
const player = {
    name: 'Messi',
    team: "Argentina",
    goal: 91
};

for (const key in player) {
    console.log(Object.values(player));
}

//8.202
const building = {
    floor: '10',
    mirpur: '',
    address: { street: 'Main Road', city: 'Dhaka', type: 'Commercial' }
};

for (const key in building) {
    console.log(building[key]);
}

