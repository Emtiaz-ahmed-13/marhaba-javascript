//19.436
/*
fetch() ফাংশন যখন সার্ভার থেকে response পায়, তখন সেটা Readable Stream ফরম্যাটে থাকে। এটা সরাসরি JavaScript Object হিসেবে ব্যবহার করা যায় না। তাই response.json() ব্যবহার করে JSON Data কে JavaScript Object-এ কনভার্ট করা হয়।
*/

fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json()) 
    .then(data => console.log(data)) 
    .catch(error => console.error("Error:", error));


//19.437
/*
fetch() ফাংশন ব্যবহার করা হয় সার্ভার থেকে ডাটা আনতে বা পাঠাতে। এটি AJAX বা API Calls করতে সাহায্য করে।
✅ ডাটা ফেচ করা (GET Request)
✅ সার্ভারে নতুন ডাটা পাঠানো (POST Request)
✅ API থেকে ডাটা আপডেট করা (PUT/PATCH Request)
✅ ডাটা ডিলিট করা (DELETE Request)
*/
//19.438

/*
fetch() আর Promise এর মধ্যে পার্থক্য
Feature	fetch()	Promise
Definition	সার্ভার থেকে ডাটা আনতে বা পাঠাতে সাহায্য করে	asynchronous task execute করতে সাহায্য করে
Usage	API থেকে ডাটা আনতে ব্যবহার হয়	Async operations (যেমন Timer, API Call) handle করতে সাহায্য করে
Returns	Promise রিটার্ন করে	resolve() বা reject() রিটার্ন করে
Example	fetch('https://api.com')	new Promise((resolve, reject) => {...})

*/

//19.439
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users=>console.log("user List",users))
    .catch(error=>console.error("Error:",error))

//19.440
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json()) 
    .then(user => console.log("User Data:", user))
    .catch(error => console.error("Error:", error));
