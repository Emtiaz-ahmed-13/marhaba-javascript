//16.402
let uniqueSet1=new Set([1,2,2,3,4,4,5]);
console.log(uniqueSet1);

//16.403
let mySet=new Set();

mySet.add(10);
mySet.add(20);
mySet.add(10);
mySet.add(30);
console.log(mySet);

//16.404
mySet.delete(20);
console.log(mySet);

//16.405
let myArray=[1,2,3,4,2,1,5,5];
let uniqueset2=new Set(myArray);
let uniqueArray=[...uniqueset2];
console.log(uniqueArray);
