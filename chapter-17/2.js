//17.409
// না, JavaScript-এ সেমিকোলন ঐচ্ছিক। যদি একটি লাইন শেষে সেমিকোলন না থাকে, তাহলে JavaScript Automatic Semicolon Insertion (ASI) নামক নিয়ম অনুসরণ করে নিজে থেকেই সেমিকোলন বসিয়ে নেয়। তবে কিছু ক্ষেত্রে এটি অপ্রত্যাশিত সমস্যার কারণ হতে পারে, তাই কোডের পঠনযোগ্যতা এবং নির্ভরযোগ্যতা বজায় রাখতে সেমিকোলন ব্যবহার করা উত্তম।

console.log("Hello") 
console.log("World") 

let x = 10
let y = x
(2 + 3).toString() 


//17.410
// ReferenceError তখন ঘটে যখন এমন কোনো ভেরিয়েবল বা ফাংশন ব্যবহার করা হয় যা ডিফাইন করা হয়নি বা অ্যাক্সেস করা যায় না।

console.log(myVar); 
function test() {
    console.log(a); 
}
test();


//17.411

// SyntaxError = কোডের গঠনগত সমস্যা

// TypeError = ভুল টাইপের ওপর অপারেশন



