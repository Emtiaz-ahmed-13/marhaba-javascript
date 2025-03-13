// 5.107
let ammount = 4500;
let discount = 0;

if (ammount > 6000) {
    discount = ammount / 100 * 15;
    const pay = ammount - discount;
    console.log(`You have to pay ${pay} after 15% discount`);
} 
else if (ammount > 3000) {
    discount = ammount / 100 * 5;
    const pay = ammount - discount;
    console.log(`You have to pay ${pay} after 5% discount`);
} 
else {
    console.log(`You have to pay ${ammount}`);
}
//5.108
let age=12;
let discount1=0;
let pay1=0
if (age>=12 && age<=60){
    discount1=pay1/100*50;
    pay1=pay1-discount1;
    console.log(`You have to pay ${pay1} after 50% discount`);
}
else{
    console.log(`You have to pay ${pay1}`);
}
// 5.109
let balance = 1000;
if (balance < 1000) {
    console.log("Deposit");
} 
else if (balance >= 1000 && balance <= 5000) { 
    console.log("Bindas life enjoy kor");
} 
else if (balance > 5000) {
    console.log("Tui dhoni, tui biya kor");
}

//5.110
let studentMarks = 80;
if(studentMarks<50){
    console.log("Fail");
}
else if(studentMarks>=50 && studentMarks<80){
    console.log("Pass");
}
else if(studentMarks>=80){
    console.log("A+");
}
//5.111
let bookPage=50;
if(bookPage<100){
    console.log("Small Book");
}
else if(bookPage>=100 && bookPage<=500){
    console.log("Medium Book");
}
else if(bookPage>500){
    console.log("heart-attack size book");
}

//5.112
let temperature= -10;
if(temperature<0)
    console.log("Ice");
else if (temperature>=0 && temperature<=20)
    console.log("Cool Cool");
else if(temperature>20)
    console.log("Hot Hot");

//5.113
let level=0;
if (level<10){
    console.log("novice");
}
else if(10< level && level<50){
    console.log("Expert");
}
else if(level>50){
    console.log("Pro Gamer");
}
