//17.406
function getFirstChar(name) {
    if (!name || typeof name !== "string") {
        return "Invalid input! Please provide a valid name.";
    }
    return name.charAt(0);
}
console.log(getFirstChar("Alice")); 
console.log(getFirstChar("")); 
console.log(getFirstChar(123)); 

//17.407
function getLastElement(arr){
    if(!Array.isArray(arr)){
        return "Warning: Input is not an arry!";
    }
    return arr.length > 0 ? arr[arr.length-1]: "Warning: Empty array!";
}
console.log(getLastElement([1, 2, 3, 4]));
console.log(getLastElement("Not an array"));
console.log(getLastElement([]));

//17.408
function getArea(length, width) {
    if (typeof length !== "number" || typeof width !== "number") {
        return "Invalid input! Length and width should be numbers.";
    }
    return length * width;
}

console.log(getArea(5, 10)); 
console.log(getArea("5", 10)); 
console.log(getArea(7, "width")); 