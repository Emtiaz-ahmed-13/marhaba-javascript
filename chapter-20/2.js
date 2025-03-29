//20.463
let x=null;
x??=75;
console.log(x);

//20.464
const product={};
product.stock??=0;
console.log(product.stock);

//20.465
const productDetails = { discount: 0 };
productDetails.discount ||= 10;

console.log(productDetails.discount); 

//20.466
const vehicle = {};
console.log(vehicle?.engine ?? "Engine info missing"); 

//20.467
const restaurant = {};
console.log(restaurant?.menu ?? "Menu not available"); 

//20.468
const profile = { social: {} };

console.log(profile.social?.twitter ?? "Twitter handle not available"); 

