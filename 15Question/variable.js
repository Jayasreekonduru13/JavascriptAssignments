let score=prompt("Enter your score");

if (score <= 49){
    console.log("F Grade");
}
else if (score >=50 && score <=59){
    console.log("D Grade");
}
else if (score >=60 && score <=69){
    console.log("C Grade");
}
else if (score >=70 && score <=89){
    console.log("B Grade");
}
else{
    console.log("A Grade")
}