let weight=prompt("Enter your weight!");
let height=prompt("Enter your height!");

let BMI = weight/(height * height);
let BMLValue= Math.trunc(BMI*10000).toFixed(1);
console.log(BMLValue);

if (BMLValue < 18.5){
    console.log("Underweight");
}
else if(BMLValue >= 18.5 && BMLValue < 24.9){
    console.log("Normal weight");
}
else if(BMLValue >= 25 && BMLValue < 29.9){
    console.log("Overweight");
}
else if(BMLValue >= 30){
    console.log("Obese");
}