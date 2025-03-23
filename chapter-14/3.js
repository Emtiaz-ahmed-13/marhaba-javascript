//14.343
const friends="Raju,Rana,Hasan,Kabir,Mahi";
const nameArray=friends.split(",");
console.log(nameArray);

//14.344
const friend = "Lotifur";
const friendArray = friend.split(""); 
console.log(friendArray);

//14.345
const arr="function if else while";
const arrArray=arr.split(" ");
console.log(arrArray);

//14.346
const language=["JavaScript","Python","Java"];
const languageString=language.join(";");
console.log(languageString);

//14.347
const loops="for,while,for-in,for-of,do-while";
const loopsArray=loops.split(",");
console.log(loopsArray);

//14.348
const text=" console log debug ";
const trimedText=text.trim();  
console.log(trimedText);

//14.349
const str1="Push";
const str2="Pop";
const str3="Shift";
const str4="Unshift";
const result=str1.concat(" ",str2," ",str3," ",str4);
console.log(result);

//14.350
const text1="Hello JavaScript Developers";
const extracted=text1.slice(6,16);
console.log(extracted);

//14.351
const text2="code more learn more";
const extractedText=text2.substring(10,15);
console.log(extractedText);


