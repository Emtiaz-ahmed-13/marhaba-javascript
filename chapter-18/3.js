//18.418
// Event Loop হলো JavaScript-এর অ্যাসিনক্রোনাস (Asynchronous) টাস্ক পরিচালনার পদ্ধতি, যা কল স্ট্যাক (Call Stack), Web APIs, Task Queue (Callback Queue), এবং Microtask Queue এর মাধ্যমে কাজ করে।

// ইভেন্ট লুপের কাজের ধাপ:
// Call Stack (Execution Stack) চেক করা → যদি ফাঁকা থাকে, তাহলে নতুন টাস্ক নিতে প্রস্তুত হয়।

// Web APIs (যেমন setTimeout, fetch, DOM Events) ব্যাকগ্রাউন্ডে কাজ করে।

// Task Queue (Callback Queue) থেকে এক্সিকিউশন স্ট্যাকে টাস্ক পাঠানো হয়, যদি স্ট্যাক ফাঁকা থাকে।

// Microtask Queue (যেখানে Promises এবং MutationObserver থাকে) আগে এক্সিকিউট হয়।

// Call Stack ফাঁকা হলে আবার নতুন টাস্ক নিয়ে কাজ শুরু করে।
console.log("Start");
setTimeout(()=>{
    console.log("Inside setTimeout");
},0);
console.log("End");


//18.419

// Call Stack আর Callback Queue-এর মধ্যে পার্থক্য (Difference between Call Stack & Callback Queue)
// Feature	Call Stack	Callback Queue
// কোথায় কাজ করে?	মেইন থ্রেডে (Execution Context)	ইভেন্ট লুপ থেকে কাজ নেয়
// কী সংরক্ষণ করে?	ফাংশন কলের তথ্য	Async অপারেশনের রেজাল্ট
// প্রথমে কে এক্সিকিউট হয়?	সরাসরি এক্সিকিউশন হয়	Call Stack ফাঁকা হলে এক্সিকিউশন হয়
// কে এখানে যায়?	Synchronous কোড (যেমন console.log(), function call())	Asynchronous অপারেশন (যেমন setTimeout(), fetch())

console.log("1")
setTimeout(()=>{
    console.log("2")
},0)
console.log("3")

//18.420
// JavaScript সিঙ্গেল-থ্রেডেড, তবে এটি Web APIs, Callback Queue এবং Event Loop ব্যবহার করে Asynchronous কাজ হ্যান্ডেল করে।

// কীভাবে হ্যান্ডেল করে?
// Call Stack: মেইন থ্রেডের কোড রান করে।

// Web APIs: setTimeout(), fetch(), DOM events ইত্যাদি ব্যাকগ্রাউন্ডে রান করায়।

// Callback Queue: Async ফাংশনের রেজাল্ট এখানে যায়।

// Event Loop: Call Stack ফাঁকা হলে Callback Queue থেকে টাস্ক নিয়ে আসে।

console.log("Start");
setTimeout(()=>{
    console.log("async Task DONE!");
},2000);
console.log("END");


