// 12.286
const product = { name: "Laptop", price: 50000, brand: "dell" };
const { brand } = product;
console.log(brand); 

// 12.287
const item = { name: "Mobile", price: 20000, phone: "Samsung" };
const { phone, price } = item;
console.log(phone, price); 

// 12.288
const colors = ["red", "blue", "green", "yellow"];
const [first, second] = colors;
console.log(first, second); 

// 12.289
const numbers = [10, 20, 30];
const [, secondNumber] = numbers;
console.log(secondNumber); 

// 12.290
const digits = [2, 4, 6, 8];
const [two, , , eight] = digits;
console.log(two, eight); 

// 12.291
function multiply(x, y) {
    return [x * 3, y * 3];
}
const [firstValue, secondValue] = multiply(2, 3);
console.log(firstValue, secondValue); 

// 12.292
const person = { nam: "Rifa", city: "Dhaka" };
const { nam, city,  } = person;
console.log(nam, city);

// 12.293
const teacher = { name: "Rifa", profession: "Teacher" };
const { name: teacherName, profession: job } = teacher;
console.log(teacherName, job); 
