let a=[-1,-2,-3,-4,-5,1,2,3,4,5];
let count=0;
for(let i=0;i<a.length;i++){
    if(a[i]>0){
        count++;
    }
}
console.log(`The total number of positive numbers in this array is ${count}`);