let num=prompt("Enter a number!");
let string="";
//Triangle pattern
for(let n=1; n<=num; n++){
    for(let i=1; i<=n; i++){
        string+="*";
    }
    string+="\n";
}
console.log(string);

string+="\n";

//Rectangle pattern

for(let n=0;n<num;n++){
    for(let i=0;i<num;i++){
        string+="*";
    }
    string+="\n";
}
console.log(string);

string+="\n";

//pyramid pattern
for(let n=1;n<=num;n++){
    for(let i=1;i<=num-n;i++){
        string+=" ";
    }
    for (let j=0; j<2*n-1;j++){
        string+="*";
    }
    string +="\n";
}

console.log(string);