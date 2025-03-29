//19.425
/*
Feature	JavaScript Object	JSON String
Definition	Key-value pair data structure	Text-based data format
Data Type	Objects in JavaScript	String
Usage	Used in JavaScript code	Used for data exchange (APIs, storage)
Key Format	Keys can be without quotes	Keys must be in double quotes
Methods	Can have functions as values	Only data, no functions allowed
Example	{ name: "Alice", age: 25 }	"{"name":"Alice","age":25}"
Conversion	Convert using JSON.stringify()	Convert using JSON.parse()
*/

//19.426
const user={
    name:"Emtiaz ahmed",
    email:"emtiaz2060@gmail.com",
    adddress:{
        street:"rajshahi-natore",
        city:"Natore",
        zip:"09"
    },
    orderHistory:[
        {Product:"Laptop",price:50000},
        {Product:"Mobile",price:20000},
        {Product:"Mouse",price:500}
    ]
}
const userJson=JSON.stringify(user,null,2);
console.log(userJson);

//19.427
const shoppingCart = {
    user: { name: "emtiaz", id: 101, contact: "emtiaz2060@gmail.com" },
    products: [
        { name: "Shoes", price: 50 },
        { name: "Bag", price: 30 },
        { name: "Watch", price: 100 }
    ],
    totalPrice: 50 + 30 + 100
};

const cartJSON = JSON.stringify(shoppingCart, null, 2);
console.log(cartJSON);

//19.428
const weather = {
    city: "Natore",
    temperature: 28,
    humidity: 60,
    forecast: [27, 29, 30, 28, 26, 25, 24] 
};

const weatherJSON = JSON.stringify(weather, null, 2);
console.log(weatherJSON);


//19.429
const movie = {
    title: "3IDIOT",
    releaseYear: 2009,
    actors: ["Amir khans", "Kareena Kapoor", "R. Madhavan"],
    ratings: 8.4
};
const movieJSON = JSON.stringify(movie, null, 2);
console.log(movieJSON);
const parsedMovie = JSON.parse(movieJSON);
console.log(parsedMovie);

//19.430
const projects = [
    {
        projectName: "Website Redesign",
        description: "Redesign the company's official website",
        teamMembers: ["Emtiaz", "Lotifur", "Sakib"],
        deadline: "2025-06-01",
        tasks: [
            { title: "Create wireframe", assignee: "EMtiaz", status: "Completed" },
            { title: "Design UI", assignee: "Lotifur", status: "In Progress" },
            { title: "Develop Frontend", assignee: "Sakib", status: "Pending" }
        ]
    }
];

const projectsJSON = JSON.stringify(projects, null, 2);
console.log(projectsJSON);

//19.431
const courses = [
    {
        courseTitle: "JavaScript Basics",
        instructor: "Jankhar mahbub",
        duration: "4 weeks",
        lessons: [
            { lessonName: "Introduction to JS", duration: "30 mins", difficulty: "Beginner" },
            { lessonName: "Functions & Scope", duration: "40 mins", difficulty: "Intermediate" },
            { lessonName: "Asynchronous JS", duration: "50 mins", difficulty: "Advanced" }
        ]
    }
];

const coursesJSON = JSON.stringify(courses, null, 2);
console.log(coursesJSON);

//19.432
const reviews = [
    {
        productName: "Wireless Headphones",
        reviewer: { name: "EMTIAZ", email: "emtiaz2060@gmail.com" },
        rating: 4.5,
        reviewText: "Great sound quality and battery life!"
    },
    
];

const reviewsJSON = JSON.stringify(reviews, null, 2);
console.log(reviewsJSON);

const parsedReviews = JSON.parse(reviewsJSON);
console.log(parsedReviews);
