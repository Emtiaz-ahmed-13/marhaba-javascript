//15.375
let a=true;
let b=1;
if(a==b){
    console.log("same");
}
else{
    console.log("different");
}

//15.376
let obj1={name:"emtiaz"};
let obj2={name:"rifa"};
console.log(obj1==obj2);

//15.377
let arr1=[1,2,3];
let arr2=arr1;
console.log(arr1==arr2);

//15.378
function checkEquality(num,boolVal){
    console.log(num==boolVal);
}
checkEquality(1,true);
checkEquality(0,false);
checkEquality(2,true);

//15.379
console.log(""==false);

//15.380
console.log(null==undefined);

//15.381
console.log(1=='1');

//15.382
console.log(1 === '1');