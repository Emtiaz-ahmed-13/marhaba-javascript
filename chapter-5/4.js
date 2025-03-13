// 5.114
let BirthdayParty = true; 
let friendDawatDei = true;
let money = 1200; 

if (!friendDawatDei) {
    console.log("Friend list theke ber kore dilam! 😡");
} 
else { 
    console.log("Ami Birthday Party te jabo! 🎉");

    if (money > 1000) {
        console.log("Gift kine niye jabo! 🎁");
    } 
    else {
        console.log("Khali hate jabo! 🤝");
    }
}
//5.115
let myMehoman = true; 
let chaKhabe = true; 
let biskutKhabe = false; 
if (myMehoman) {
    if (chaKhabe) {
        console.log("Apni cha khaben, biskut khaben naki? 🍵🍪");

        if (biskutKhabe) {
            console.log("Cha r biskut ready korchi! ☕🍪");
        } else {
            console.log("Sudhu cha ready korchi! ☕");
        }
    } 
    else {
        console.log("Bose bose Star Jalsha dekhun! 📺😆");
    }
}
//5.116
let isActive = true; 
let hasSubscription = true; 
let isPremium = false; 

if (isActive) {
    console.log("Account is active! ✅");

    if (hasSubscription) {
        console.log("User has a subscription. 🔄");

        if (isPremium) {
            console.log("Enjoy Premium Features! 🚀✨");
        } else {
            console.log("Enjoy Free Version! 🎉");
        }
    } 
    else {
        console.log("No subscription found. Enjoy Free Version! 🎉");
    }
} 
else {
    console.log("Account is inactive! Please activate your account. ❌");
}
//5.117
let freezerContents = "food"; 
let foodStatus = "cold"; 
let isDeliveryAppWorking = true; 
let isFasting = false; 
if (freezerContents === "food") {
    console.log("Basar freeze a khabar ase! ❄️");

    if (foodStatus === "hot") {
        console.log("Khabar gorom! Enjoy your meal! 🍽️🔥");
    } else {
        console.log("Food is cold. You need to heat it up! 🔥");
    }
} else {
    console.log("Basar freeze a khabar nai. Check food delivery app. 🚗");

    if (isDeliveryAppWorking) {
        console.log("Food delivery app is working. Order food! 🍕🍔");
    } else {
        console.log("Food delivery app is not working. Abolbi, ajke ami roza! 🕌");
    }
}
//5.118
let guestCount = 120; 
let isGiftForAll = true; 
if (guestCount >= 100) {
    console.log("100+ Guest asbe! 🎉");
    if (isGiftForAll) {
        console.log("Sobai gift anbe! 🎁✨");
    } else {
        console.log("Let's party all night! 🕺💃🎶");
    }
} else {
    console.log("I will party with myself! 😎");
}
