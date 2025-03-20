// 11.262
function sumThreeNumbers(a = 0, b = 0, c = 0) {
    return a + b + c;
}
console.log(sumThreeNumbers(2, 3, 4)); 

// 11.263
function storeMoney(money = 50) {
    if (!storeMoney.total) {
        storeMoney.total = 0;
    }
    storeMoney.total += money;
    return storeMoney.total;
}
console.log(storeMoney(100));

// 11.264
function userInfo(name = "anonymous", income = 0) {
    return `Name: ${name}, Monthly Income: ${income}`;
}
console.log(userInfo("Rahim", 5000));

// 11.265
function squareNumber(num = 1) {
    return num * num;
}
console.log(squareNumber(5));

// 11.266
function productInfo(name = "Unknown product", price = 0) {
    return `Product: ${name}, Price: ${price}`;
}
console.log(productInfo("Laptop", 50000));

// 11.267
function favoriteBooks(books = ["JS book"]) {
    return books;
}
console.log(favoriteBooks(["Harry Potter", "Rich Dad Poor Dad"])); 
console.log(favoriteBooks()); 

// 11.268
function totalPrice({ price = 10, quantity = 1 } = {}) {
    return price * quantity;
}
console.log(totalPrice({ price: 50, quantity: 3 })); 

// 11.269
function multiplyArray(arr = [5, 10, 15]) {
    return arr.map(num => num * 2);
}
console.log(multiplyArray([2, 3, 4])); 

// 11.270
function simpleInterest({ principal = 1000, rate = 5 } = {}) {
    return (principal * rate) / 100;
}
console.log(simpleInterest({ principal: 2000, rate: 10 })); 

// 11.271
function netSalary({ salary = 50000, tax = 10 } = {}) {
    let taxAmount = (salary * tax) / 100;
    return salary - taxAmount;
}
console.log(netSalary({ salary: 60000, tax: 15 })); 