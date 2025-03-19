// 9.231
function checkArrayElements(arr) {
    if (arr.length % 2 === 0) {
        return 'The number of elements is even';
    } else {
        return 'The number of elements is odd';
    }
}
console.log(checkArrayElements([1, 2, 3, 4]));

// 9.232
function firstLetter(str) {
    return str.charAt(0);  
}
console.log(firstLetter('Raju'));

// 9.233
function greaterThen10(num){
    if (num > 10) {
        return 'The number is greater than 10';
    } else {
        return 'The number is less than 10';
    }
}
console.log(greaterThen10(15));

// 9.234
function AddFirstTwoNumbers(arr) {
    return arr[0] + arr[1];
}
console.log(AddFirstTwoNumbers([1, 2, 3, 4]));

// 9.235
function sqr(n) {
    if (n % 2 === 0) {
        return n * n;  
    } else if (n % 3 === 0) {
        return n * n * n; 
    }
}
console.log(sqr(4));

// 9.236
function checkTwoNumberLength(num1, num2) {
    if (num1.toString().length === num2.toString().length) {
        return 'The length of two numbers are same';
    } else {
        return 'The length of two numbers are not same';
    }
}
console.log(checkTwoNumberLength('emtiaz','rifa'));

// 9.237
function checkGreaterThan100(num1, num2) {
    if (num1 * num2 > 100) {
        return (num1 * num2) / 2;
    }
    return "The product is not greater than 100";  
}
console.log(checkGreaterThan100(10, 20));  
