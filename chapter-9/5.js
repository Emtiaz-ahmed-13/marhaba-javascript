
// 9.238
function checkEven(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i]; 
        }
    }
    return sum;
}
console.log(checkEven([5, 15, 8, 7])); 

// 9.239
function greaterBetweenTwoNumbers(arr) {
    let minValue = arr[0];  
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i];
        }
    }
    return minValue;  
}
console.log(greaterBetweenTwoNumbers([20, 35, 78])); 

// 9.240
function number(n) {
    if (n < 18) {
        return 18;
    } else if (n > 45 && n < 18) {
        return 45;
    } else {
        return n;  
    }
}
console.log(number(10));   

// 9.241
function friend(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 4 === 0) {
            sum += arr[i];
        }
    }
    return sum;  
}
console.log(friend([2, 4, 5, 7, 8, 32, 45])); 


// 9.242
function checknumber(num) {
    if (num < 20) {
        return num * 2;  
    } else {
        return num / 20;  
    }
}
console.log(checknumber(10));  

// 9.243
function sumNegativeNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            sum += arr[i];  
        }
    }
    
    return sum;
}

console.log(sumNegativeNumbers([1, -3, 5, -7, 9, -2]));

// 9.244
function sumDivisibleBy3(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0) { 
            sum += arr[i];  
        }
    }
    return sum;
}

console.log(sumDivisibleBy3([1, 3, 5, 6, 9, 12]));  
