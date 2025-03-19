// 10.253
function calculateTax(income_ammount) {
    let tax;
    if (income_ammount <= 50000) {
        tax = income_ammount * 0.10;  
    } else if (income_ammount > 50000 && income_ammount <= 100000) {
        tax = income_ammount * 0.20;  
    } else if (income_ammount > 100000 && income_ammount <= 200000) {
        tax = income_ammount * 0.30;  
    } else {
        tax = income_ammount * 0.40;  
    }
    return tax;
}

console.log(calculateTax(50000));


// 10.254
function calculateDeliveryCost(waight) {
    let cost;
    if (waight <= 10) {
        cost = 100;
    } else if (waight > 10 && waight <= 20) {
        cost = 300;
    } else if (waight > 20 && waight <= 50) {
        cost = 1000;
    } else {
        cost = 1000 + (waight - 50) * 100; 
    }
    return cost;
}
console.log(calculateDeliveryCost(50));  

// 10.255
function getGrade(marks) {
    let grade;
    
    if (marks >= 80) {
        grade = 'A';
    } else if (marks >= 70 && marks <= 79) {
        grade = 'B';
    } else if (marks >= 60 && marks <= 69) {
        grade = 'C';
    } else if (marks >= 50 && marks <= 59) {
        grade = 'D';
    } else {
        grade = 'F'; 
    }

    return grade;
}

console.log(getGrade(85)); 


