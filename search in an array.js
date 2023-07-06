let a=[-3,-2,-1,1,2,3];
let search = parseFloat(prompt("SEARCH"));
let k=0;
for(i=0;i<a.length;i++){
    if (search == a[i]){
        k=1;

        break;
    }
   
}
if(k==1){
console.log(`${search} found at array[${i}].`);
}
else{
    console.log(`${search} is not found.`);
}