//13.316
const numbers=[10,15,20,25,30,25];
const sum=numbers.reduce((acc,num)=>acc+num,0);
console.log(sum);

//13.317
const products = [
    { name: 'shampoo', price: 100 },
    { name: 'soap', price: 50 },
    { name: 'toothpaste', price: 75 }
];

const totalPrice = products.reduce((acc, product) => acc + product.price, 0);
console.log(totalPrice);


//13.318
const productList = [
    { name: 'Pen', price: 5 },
    { name: 'Book', price: 50 },
    { name: 'Bag', price: 100 }
];

const totalProductPrice = productList.reduce((acc, item) => acc + item.price, 0);
console.log(totalProductPrice); 

//13.319
const nums=[1,2,3,4,5];
const product=nums.reduce((acc,num)=>acc*num,1);
console.log(product);

//13.320
const values = [10, 20, 30, 40, 50];
const maxVal = values.reduce((max, num) => (num > max ? num : max), values[0]);
console.log(maxVal); 

//13.321
const nums2 = [100, 200, 300, 400];
const sumWithInitial = nums2.reduce((acc, num) => acc + num, 50);
console.log(sumWithInitial);

