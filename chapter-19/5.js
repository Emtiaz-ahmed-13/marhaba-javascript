//19.446
const jsonData={"product":"Date","price":100};
try {
    const data=JSON.parse(jsonData);
    if(typeof data!=="object"){
        throw new  Error("Invalid JSON formate")
    }
    console.log("parsed data",data);
    
} catch (error) {
    console.error("Error:",error)
    
}
//19.447
function validateInput(email) {
    if (!email.includes("@")) {
        throw new Error("Invalid email format");
    }
    console.log("Valid email:", email);
}

try {
    validateInput("emtiaz2060@gmail.com"); 
} catch (error) {
    console.error(error.message);
}
//19.448
const userData = '{ "role": "CEO", "weeklyHours": 1000 }'; 

try {
    const user = JSON.parse(userData);
    console.log("User Data:", user);
} catch (error) {
    console.error("Error parsing JSON:", error.message);
} finally {
    console.log("Week is over");
}
//19.449
function stringOnlyParser(input) {
    if (typeof input !== "string" || input.trim() === "") {
        throw new Error("Input must be a String.");
    }
    console.log("Valid String:", input);
}

try {
    stringOnlyParser("Hello World!"); 
} catch (error) {
    console.error(error.message);
}
//19.450
function deleteAccount() {
    try {
        console.log("Deleting account...");
        throw new Error("Failed to delete account"); 
    } catch (error) {
        console.error(error.message);
    } finally {
        console.log("Account deletion attempt finished");
    }
}

deleteAccount();




