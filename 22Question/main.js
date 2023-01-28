const ages=[19,22,19,24,20,25,26,24,25,24];
let sorted=ages.sort();
console.log(sorted);
let length=sorted.length;
let minValue=sorted[0];
let maxValue=sorted[sorted.length-1];
console.log(`min value: ${minValue}`);
console.log(`max value: ${maxValue}`);
let middleValue=length/2;
console.log(`median age: ${sorted[middleValue-1]}, ${sorted[middleValue]}`);
let n=0;
let sum=0;
while(n<=9){
    sum=sum+sorted[n];
    n=n+1;
}
let avg=sum/10;
console.log(`Average Age: ${sum/10}`);
console.log(`Range: ${maxValue-minValue}`);
console.log(`Comparing: min-avg= ${Math.abs(minValue-avg)}, max-avg=${Math.abs(maxValue-avg)}`);
