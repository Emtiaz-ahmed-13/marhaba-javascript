//15.358
let x;
console.log(x); //undefined

//15.359
function add(a,b){
    console.log(a+b);
}
let result=add(5,10);
console.log(result); //15 undefined

//15.360
let numbers=[10,20,30,40,50];
delete numbers[2];
console.log(numbers); //[10,20,empty,40,50]
console.log(numbers[2]); //undefined

//15.361
function sum(a,b,c){
    console.log(c);
}
sum(5,10); //undefined

//15.362
const student={name:"serious sojib",roll:1,marks:99};
console.log(student.marks); //99