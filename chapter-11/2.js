// 11.272
const num1 = 100;
const num2 = 20;
console.log(`The difference between ${num1} and ${num2} is ${num1 - num2}`);

// 11.273
const employee = {
    name: "EMTIAZ AHMED",
    age: 24,
    salary: 50000
};
console.log(`Employee Name: ${employee.name}, Age: ${employee.age}, Salary: $${employee.salary}`);


// 11.274
const fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log(`My favorite third fruit is ${fruits[2]}`);

// 11.275
const a = 50;
const b = 10;
console.log(`The division of a and b is ${a / b}`);


// 11.276
const person = { firstName: "Amit", lastName: "Kumar" };
console.log(`Full Name: ${person.firstName} ${person.lastName}!`);

// 11.277
const animals = ["Cat", "Dog", "Elephant"];
console.log(`My favorite animals are ${animals.join(", ")}`);


// 11.278
const student = {
    name: "Rifa",
    age: 18,
    results: [85, 90, 80]
};
//11.279
const averageMarks = student.results.reduce((sum, mark) => sum + mark, 0) / student.results.length;

console.log(`Student Name: ${student.name}, Average Marks: ${averageMarks}`);
