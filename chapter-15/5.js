//15.371
let taxRate=5;
function calculateTax(income){
    let taxAmount=(income*taxRate)/100;
    return taxAmount;
}
console.log("Tax Amount",calculateTax(10000));

//15.372
function secrectFcuntion(){
    let insideSecrect="internal secrect hiding place";
    console.log("Inside secrect function",insideSecrect);
}

secrectFcuntion();
console.log("Outside secrect function",insideSecrect);

//15.373
if(true){
    let temperatue=30;
    console.log("Inside block",temperatue);
}
console.log("Outside block",temperatue);

//15.374
function schoolDetails(){
    let schoolName="Natore goverment boy's high school";
    function showSchoolName(){
        console.log("School Name",schoolName);
    }
    showSchoolName();
}
schoolDetails();