//19.451
/*
✅ async-await ব্যবহার করা হয় Asynchronous JavaScript-কে আরও সহজ ও পাঠযোগ্য (readable) করার জন্য।
✅ এটি Promise-based কোডকে synchronous স্টাইলে লেখার সুযোগ দেয়, যাতে callback hell এড়ানো যায়।
✅ try-catch ব্লক ব্যবহার করে error handling করা সহজ হয়।
*/
//19.452
async function fetchUser(){
    try {
        const respone=await(fetch("https://jsonplaceholder.typicode.com/users/2"));
        const data=await respone.json();
        console.log("user data",data);
    } catch (error) {
        console.error("Error Fetching user data:",error)
        
    }
}
//19.453
/*
👉 Callback Hell: যখন অনেক nested callbacks একসাথে থাকে, তখন কোড পড়া ও মেইনটেইন করা কঠিন হয়ে যায়।
এটি সাধারণত asynchronous operations (যেমন: API calls, setTimeout, database queries) ব্যবহারের সময় হয়।
*/
fetch("https://jsonplaceholder.typicode.com/posts?userId=1", function(response) {
    response.json(function(data) {
        console.log("Posts Loaded:", data);
        fetch("https://jsonplaceholder.typicode.com/users/1", function(response) {
            response.json(function(user) {
                console.log("User Details:", user);
            });
        });
    });
});
/*
🔴 সমস্যাঃ কোডটি indented structure এ ডুবে গেছে, যা Pyramid of Doom তৈরি করেছে।
✅ সমাধানঃ async-await ব্যবহার করা।
*/

//19.454
//(a)
function getPostsByUser(userId, callback) {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => response.json())
        .then(data => callback(null, data))
        .catch(error => callback(error, null));
}

getPostsByUser(1, (error, posts) => {
    if (error) {
        console.error("Error loading posts:", error);
    } else {
        console.log("User Posts (Callback):", posts);
    }
});
//(b)
async function getPostsByUserAsync(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const data = await response.json();
        console.log("User Posts (Async-Await):", data);
    } catch (error) {
        console.error("Error loading posts:", error);
    }
}

getPostsByUserAsync(1);


//(c)
async function fetchComments() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments");
        const data = await response.json();
        console.log("Comments Data:", data);
    } catch (error) {
        console.error("Error fetching comments:", error);
    } finally {
        console.log("Request completed!");
    }
}

fetchComments();

//19.455
async function fetchUserById(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const userData = await response.json();
        console.log(`User ${userId} Data:`, userData);
    } catch (error) {
        console.error(`Error fetching user ${userId}:`, error);
    }
}

fetchUserById(3);
