//13.305
const numbers=[10,15,20,25,30,25];
const firstAbove20=numbers.find(num=> num>20);
console.log(firstAbove20);

//13.306
const heights=[65,70,68,72,68,73];
const tallerThan69=heights.filter(heights=>heights>60);
console.log(tallerThan69);

//13.307
const nums=[7,10,15,20,25,30];
const divideBy2=nums.map(num=>num/2);
console.log(divideBy2);

//13.308
const friends=['mamum','sadman','lotifur','simantho','Rauf'];
const thirdLetters=friends.map(name=>name[2]);
console.log(thirdLetters);

//13.309
const people=['mamum','sadman','lotifur','simantho','Rauf','harry'];
const startWithH=people.find(name=>name[0]==='h');
console.log(startWithH);

//13.310
const arr=[1,2,3,4,5];
arr.forEach(num=>console.log(num));

//13.311
const animals=['lion','tiger','elephant','monkey','dog'];
animals.forEach(animal=>console.log(animal));
