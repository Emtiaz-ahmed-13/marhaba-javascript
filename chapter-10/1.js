// 10.245
function mileToKilometer(mile) {
    const kilometer = mile * 1.60934;
    const mileAgain = kilometer * 0.621371; 
    return { kilometer, mileAgain };
}
console.log(mileToKilometer(1));

// 10.246
function mileToYard(mile){
    const yard=mile*1760;
    return yard;
}
console.log(mileToYard(13));

// 10.247
function kwhToKcal(kwh){
    const kcal=kwh*860;
    return kcal;    
}
console.log(kwhToKcal(1));

// 10.248
function htos(h){
    const m=h*60*60;
    return m;
}
console.log(htos(1));

// 10.249
function cmToMeter(centimeter){
    const meter=centimeter/100;
    return meter;
}
console.log(cmToMeter(100));

// 10.250
function inchToSenti(inch){
    const senti=inch*2.54;
    return senti;
}
console.log(inchToSenti(1));

// 10.251
function poundToKilogram(pound){
    const kilogram=pound*0.453;
    return kilogram;
}
console.log(poundToKilogram(1));

// 10.252
function yeardToMeter(yard){
    const meter=yard*0.91;
    return meter;
}
console.log(yeardToMeter(1));
