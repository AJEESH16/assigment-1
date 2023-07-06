let a=prompt("enter a number");
let b=prompt("enter a second number");
console.log(`a is ${a} b is ${b}`)
let tempt=a;
a=b
b=tempt;
console.log(`$(a is ${a} b ${b})`)