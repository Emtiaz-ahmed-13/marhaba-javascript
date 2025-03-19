// 9.215
function AddFatherSonAge(a, b) {
    let totalAge = a + b;
    console.log(totalAge);
}
AddFatherSonAge(55, 25);

// 9.216
function Calculator(a,b){
    let mul = a * b;
    console.log(mul );
}
Calculator(20,15);

// 9.217
function AvgOffthreesubject(a,b,c){
    let avg = (a+b+c)/3;
    console.log(avg);
}
AvgOffthreesubject(80,85,90);

// 9.218
function age(){
    let myAge = 2001;
    let now=2025;
    let age = now-myAge;
    console.log(age);
}
age();

// 9.219
function store(myMoney) {
    let lowPrice = 35;
    let total = myMoney / lowPrice;
    console.log('Tahole ami', Math.floor(total), 'ta law kinte parbo.');
}

store(70); 

// 9.220
function avgOf4number(a,b,c,d){
    let avg = (a+b+c+d)/4;
    console.log(avg);
}
avgOf4number(10,20,30,40);

// 9.221
function sellingPrice(costPrice) {
    let profit = 250; 
    let totalSellingPrice = costPrice + profit;
    console.log(`Selling price of the item is: ${totalSellingPrice} TK`);
}
sellingPrice(1000); 

// 9.222
function findHundredYear(birthYear) {
    let hundredYear = birthYear + 100;
    console.log(`You will turn 100 years old in the year ${hundredYear}.`);
}
findHundredYear(2001); 

// 9.223
function mobileUse(dailyHours) {
    let daysInMonth = 30;
    let monthlyUsage = dailyHours * daysInMonth;
    console.log(`You use your mobile for ${monthlyUsage} hours in a month.`);
}
mobileUse(5); 

// 9.224
