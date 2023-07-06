let n =parseInt(prompt("ENTER A NUMBER: "));
let sum=0;
let rem=0;
while(n>0){
    rem =n%10;
    sum +=rem;
    n=Math.floor(n/10);
}
console.log(sum);