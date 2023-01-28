let month=prompt("Enter a month");

if (month=='february'){
    console.log(`${month} has 29 days`);
}

else if (month == 'january' || month == 'march'|| month == 'may'|| month == 'july'|| month == 'august'|| month == 'october'||month == 'december'){
    console.log(`${month} has 31 days`);
}

else{
    console.log(`${month} has 30 days`);
}