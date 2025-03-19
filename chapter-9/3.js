// 9.224
function isGreaterThan10(a) {
    if (a > 10) {
        return 'The number is greater than 10';
    } else {
        return 'The number is less than 10';
    }
}
console.log(isGreaterThan10(5));

// 9.225
function is13Divisible(a) {
    return a % 13 === 0 ? 'The number is divisible by 13' : 'The number is not divisible by 13';
}
console.log(is13Divisible(26));

// 9.226
function restaurantBill(rice, curry, drink) {
    let total = rice + curry + drink;
    return `Your total bill is: ${total} TK`;
}
console.log(restaurantBill(50, 100, 30));

// 9.227
function isAllowVote(age) {
    return age >= 18 ? 'Eligible for voting' : 'Not Eligible';
}
console.log(isAllowVote(16));

// 9.228
function lengthString(a) {
    return a.length;
}
console.log(lengthString('I love you Rifa'));

// 9.229
function avgOf3Numbers(a, b, c) {
    let avg = (a + b + c) / 3;
    return avg;
}
console.log(avgOf3Numbers(10, 20, 30));

// 9.230
function checkNegative(num) {
    if (num < 0) {
        return num * -1; 
    } else {
        return num; 
    }
}
console.log(checkNegative(-10));
