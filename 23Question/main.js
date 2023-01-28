let num=prompt("Enter a number!");
let isPrime=true;
for (let i=2; i<num; i++){
    if (num%i==0){
        isPrime = false;
        break;
    }
}
if (isPrime){
    console.log(`${num} is a Prime number`);
}
else{
    console.log(`${num} is a non prime`);
}