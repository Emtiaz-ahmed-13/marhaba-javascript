//18.412
// যদি সিনক্রোনাস (Synchronous) কোডের মধ্যে একটি ফাংশন কল করা হয়, তাহলে ফাংশনটি সম্পন্ন না হওয়া পর্যন্ত পরবর্তী কোড এক্সিকিউট হবে না।

function firstFunction() {
    console.log("First function is running...");
}
function secondFunction() {
    console.log("Second function is running...");
}
firstFunction(); 
secondFunction(); 

console.log("Code execution finished");

//18.413
// ✅ হ্যাঁ, জাভাস্ক্রিপ্ট একটি সিঙ্গেল-থ্রেডেড ভাষা।
// এর মানে, একটি সময় শুধুমাত্র একটি অপারেশন এক্সিকিউট হয়, এবং সব কোড এক্সিকিউট হয় কল স্ট্যাক (Call Stack)-এ।

// সিঙ্গেল-থ্রেডেড মানে কী?
// JavaScript একবারে একটি কাজ করতে পারে।

// যদি কোনো হেভি অপারেশন (যেমন লুপ বা API কল) থাকে, তাহলে এটি অন্য কাজগুলিকে ব্লক করে দিতে পারে।

// JavaScript Event Loop এবং Web APIs-এর মাধ্যমে Asynchronous অপারেশন হ্যান্ডেল করতে পারে।

while(true){
    console.log("I am a infinite loop");
}
console.log("This will never run");

//✅ তাই JavaScript এর মধ্যে Asynchronous কোড ব্যবহার করা হয় (যেমন setTimeout, fetch, Promise), যাতে ব্লকিং সমস্যা এড়ানো যায়।