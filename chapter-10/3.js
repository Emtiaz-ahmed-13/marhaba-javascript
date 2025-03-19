// 10.256
function averageOfEvenNumbers(arr){
    const evenNumber=arr.filter(num=>num%2==0);

    if(evenNumber.length==0) return 0;

    const sum=evenNumber.reduce((acc,num)=>acc+num,0);
    const avg= sum/evenNumber.length;
    return avg;
}
console.log(averageOfEvenNumbers([1,2,3,4,5,6,7,8,9,10]));

// 10.257
function oddNumbersSquare(arr) {
    const oddNumbers = arr.filter(num => num % 2 !== 0);
    let new_arr = [];
    for (let i = 0; i < oddNumbers.length; i++) {
        new_arr.push(oddNumbers[i] * oddNumbers[i]);
    }
    return new_arr;
}
console.log(oddNumbersSquare([1, 2, 3, 4, 5, 6]));  

// 10.258
function checkingOdd(arr) {
    const oddNumbers = arr.filter(num => num % 2 !== 0);
    
    if (oddNumbers.length === 0) {
        return "No odd numbers";
    } else {
        return "Odd numbers found"; 
    }
}
console.log(checkingOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));  

// 10.259
function oddNumberAvg(arr){
    const oddNumbers=arr.filter(num=>num%2!==0);
    if(oddNumbers.length==0) {
        return "No odd numbers found";
    }
    const sum=oddNumbers.reduce((acc,num)=>acc+num,0);
    const avg=sum/oddNumbers.length;
    return parseFloat(avg.toFixed(2));
}
console.log(oddNumberAvg([1,2,3,4,5,6,7,8,9,10]));

// 10.260
function subtractOneFromOdd(arr) {
    let newArray = [];
    for (let num of arr) {
        if (num % 2 !== 0) {  
            newArray.push(num - 1);  
    }
    
    return newArray;
}
}
console.log(subtractOneFromOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));  

// 10.261
function noDuplicate(array) {
    const unique = [];
    for (const item of array) {
        if (!unique.includes(item)) {
            unique.push(item);
        }
    }
    
    return unique;
}
console.log(noDuplicate([1, 2, 2, 3, 4, 4, 5])); 


