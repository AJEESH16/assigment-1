let num=parseFloat(prompt("ENTER A NUMBER: "));
let reverse=0;
let reminder=0;
while(num>0){
    reminder=num%10;
    reverse=(reverse*10)+reminder;
    num=Math.floor(num/10);
}
console.log(`The reverse of the number is ${reverse}`);