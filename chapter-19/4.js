//19.441
fetch("https://api.example.com/user/123", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ maritalStatus: "Married" }) 
});

//19.442
fetch("https://api.example.com/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "Emtiaz ahmed", email: "emtiaz2060@gmail.com" }) 
});

//19.443
/*
ভিডিও দেখার সময় CRUD অপারেশন ঘটে:
✅ Read (GET) – সার্ভার থেকে ভিডিও ফাইল ফেচ করা হয়।
✅ Update (PATCH/PUT) – যদি ইউজার ভিডিওতে কমেন্ট বা রেটিং আপডেট করে।
✅ Delete (DELETE) – ইউজার যদি কমেন্ট বা হিস্টোরি মুছে দেয়।
*/

//19.444

/*
CRUD কী জিনিস?
CRUD মানে Create, Read, Update, Delete।
এটা ডাটাবেজ ও API ম্যানেজমেন্টের ফান্ডামেন্টাল অপারেশন।

Operation	HTTP Method	Example
Create	POST	        নতুন ইউজার যোগ করা
Read	GET	            ইউজারের প্রোফাইল দেখা
Update	PUT / PATCH	ই   উজারের তথ্য আপডেট করা
Delete	DELETE	        ইউজার অ্যাকাউন্ট মুছে ফেলা

*/

//19.445
/*
HTTP    মেথড ও তাদের কাজ
Method	ব্যবহার
GET	সার্ভার থেকে ডাটা আনা
POST	নতুন ডাটা তৈরি করা
PUT	সম্পূর্ণ ডাটা আপডেট করা
PATCH	নির্দিষ্ট অংশ আপডেট করা
DELETE	ডাটা মুছে ফেলা
*/
fetch("https://api.example.com/posts/1", { method: "DELETE" }) 













