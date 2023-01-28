let age=prompt("Enter your age: ");
if (age>=18){
    console.log('you are old enough to drive');
}
else{
    let remainingyears=18-age;
    console.log(`Wait for ${remainingyears} years to drive`);
}