let countriesList=['india','japan','korea','canada'];
let country='ethopia';
let isFalse=false;
let n=0;
while (n<4){ 
    if(countriesList[n]==country){
        isFalse=true;
        console.log(isFalse);
    }
    n=n+1;
}  
if (isFalse == true){
    console.log('Ethopia');
}
else{
    countriesList.push(country);
    console.log(countriesList);
}
