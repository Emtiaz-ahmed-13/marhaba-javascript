//11.280
const firstElement=arr=>arr[0];
console.log(firstElement([10,20,30]));

//11.281
const multiplyThree=(a,b,c)=>a*b*c;
console.log(multiplyThree(2,3,4));

//11.282
const getUnknown=()=>"unknown";
console.log(getUnknown());

//11.283
const divideMoney=person=>person.money/5;
console.log(divideMoney({name:"Rifa",money:100}));

//11.284
const sumFirstLast=arr=>arr[0]+arr[arr.length-1];
console.log(sumFirstLast([10,20,30]));

//11.285
const addNumbers=(a=10,b=5) =>a+b;
console.log(addNumbers());