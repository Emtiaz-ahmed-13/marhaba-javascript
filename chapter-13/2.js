//13.312
const numbers=[50,75,120,30,200];
const hasGreaterThan1=numbers.some(num=>num>100);
console.log(hasGreaterThan1);

//13.313
const numbers2=[10,20,30,40,50];
const allDivisibleBy5=numbers2.every(num=>num%5===0)
console.log(allDivisibleBy5);

//13.314
const words=['Hello','banana','cherry','date','elderberry'];
const hasHello=words.some(word=>word==='Hello');
console.log(hasHello);

//13.315
const ages=[10,15,20,25,30];
const allAbove18=ages.every(age=>age>18);
console.log(allAbove18);

