//15.355
let num=15;
let copy=num;
copy=25;
console.log("num",num);
console.log("copy",copy);   
/*📌 ব্যাখ্যা:
প্রিমিটিভ টাইপ (যেমন: number, string, boolean) কপি করার সময় ভ্যালু আলাদা আলাদা সংরক্ষিত হয়, তাই copy পরিবর্তন করলেও num অপরিবর্তিত থাকে।
*/
//15.356
let arr=[1,2,3];
let copiedArr=arr;
copiedArr.push(44);

/*
📌 ব্যাখ্যা:
অ্যারে একটি রেফারেন্স টাইপ। এখানে copiedArr মূল arr-এর মেমোরি রেফারেন্স কপি করেছে। তাই যখন copiedArr-এ push(44) করা হলো, তখন arr-এর মধ্যেও পরিবর্তন দেখা গেল।

*/
//15.357
let language={
    name:"JavaScript",
    age:30
}

let newVarsion=languages;
newVarsion.location="browser";
console.log("Orginal Object",language);
console.log("Copied Object",newVarsion);