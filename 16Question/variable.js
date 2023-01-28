let month=prompt("Enter a Month");

if (month=='june'|| month == 'july'|| month == 'august'){
    console.log(`${month} : Summer`);
}

else if (month == 'january' || month == 'february'|| month == 'december' ){
    console.log(`${month} : Winter`);
}

else if (month == 'march'|| month == 'april'|| month == 'may'){
    console.log(`${month} : Spring`);
}

else{
    console.log(`${month} : Autumn`);
}