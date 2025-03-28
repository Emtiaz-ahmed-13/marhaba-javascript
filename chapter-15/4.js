//15.367
function outerfunction(callback){
    console.log("outer function excuting...");
}

function innnerfunction(){
    console.log("Inner function called!!!");
}
outerfunction(innnerfunction);

//15.368
function processObject(obj,callback){
    callback(Object.keys(obj));
}
let myObj={name:"John",age:30,city:"New York"};

processObject(myObj,function(keys){
    console.log("Object keys:",keys);
});

//15.369
function numberProcessor(number,callback){
    let result=number/5;
    callback(result);
}
numberProcessor(25,function(output){
    console.log("Processed Number: ",output);
})

//15.370
function greeting(){
    console.log("Hello from greeting function!");
    grettingHandler();
}
function greetingHandler(){
    console.log("Hello from greetingHandler function!");
}