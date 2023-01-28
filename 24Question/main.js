let n=1;
let listEven=[];
let listOdd=[];
while(n<=100){
    if (n % 2 ==0){
        listEven.push(n);
    }
    else{
        listOdd.push(n);
    }
    n=n+1;
}
console.log(listEven);
console.log(listOdd);
