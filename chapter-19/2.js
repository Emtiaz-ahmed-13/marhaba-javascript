//19.433
const getUsers=new Promise((resolve,reject)=>{
    const users=["emtiaz","lotifur","sakib"]
    if(users.length>0){
        resolve(users);
    }
    else{
        reject("No user found");
    }
})

getUsers
    .then(users=>console.log("user List: ",users))
    .catch(error=>console.log("Error: ",error));


//19.434
const processPayment=(ammount)=>{
    return new Promise((resolve,reject)=>{
        if(ammount>0)
            resolve(`Payment of $${ammount} is successful`);
        else
            reject("Payment failed");
    })
}
processPayment(100)
    .then(success=>console.log(success))
    .catch(error=>console.log(error));

//19.435
const sendEmail = (email) => {
    return new Promise((resolve, reject) => {
        const validEmails = ["emtiaz2060@gmail.com", "lotifur@gmail.com", "sakib@gmail.com"];
        
        if (validEmails.includes(email)) {
            resolve("Email from emtiaz.");
        } else {
            reject("Let's Dance in the spam folder!");
        }
    });
};
sendEmail("emtiaz2060@gmail.com.com")
    .then(response => console.log(response))
    .catch(error => console.log("Error:", error));

