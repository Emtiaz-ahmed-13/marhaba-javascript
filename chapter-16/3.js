
//16.394
console.log(new Date());

//16.395
let futureDate=new(2035,6,15,14,45,30);
console.log(futureDate);

//16.396
let currentDate=new Date();
console.log(currentDate.getFullYear());

//16.397
currentDate.setFullYear(2040);
console.log(currentDate);

//16.398
let specificDate=new Date(2029,1,16);
let dayIndex=specificDate.getDay();
let days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

console.log("Weekday Index:",dayIndex);
console.log("Day name",days[dayIndex]);

