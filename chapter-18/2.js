//18.414
setTimeout(()=>{
    console.log("I wasted 3 seconds of my life by looking at screen and doing nothing");
},3000);

//18.415
let num=131;
setInterval(()=>{
    console.log(num);
    num+=2;
},2000);

//18.416
let count=0
let interval=setInterval(()=>{
    console.log("I am learning JavaScript");   
    count++;
    if(count===6){
        clearInterval(interval);
    }
},2000);

//18.417
//যদি setTimeout()-এ সেকেন্ড প্যারামিটার না দেওয়া হয়, তাহলে ডিফল্ট মান হয় 0 মাইক্রোসেকেন্ড, অর্থাৎ setTimeout(() => {}, 0) আসলে তৎক্ষণাৎ এক্সিকিউট হবে না বরং Call Stack ফাঁকা হলে তারপর এক্সিকিউট হবে (Event Loop অনুযায়ী)।

