// 12.294
const product = { name: "Laptop", price: 50000, brand: "Dell" };
const { name, ...restProduct } = product;
console.log(restProduct); 

// 12.295
const project = { id: 101, title: "Web App", budget: 3000, client: "Tech Corp" };
const { title, ...restProject } = project;
console.log(restProject);

// 12.296
const programmer = { name: "Sophia", language: "JavaScript", experience: 5, specialty: "Frontend", tools: "React" };
const { language, specialty, ...details } = programmer;
console.log(language, specialty); 
console.log(details); 

// 12.297
const numbers = [10, 20, 3, 30, 300, 3000];
const [, , ...restNumbers] = numbers;
console.log(restNumbers); 

// 12.298
function sumRemaining(first, second, ...rest) {
    return rest.reduce((acc, num) => acc + num, 0);
}
console.log(sumRemaining(5, 10, 15, 20, 25));

// 12.299
function average(...numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return numbers.length ? sum / numbers.length : 0;
}
console.log(average(10, 20, 30, 40, 50)); 
