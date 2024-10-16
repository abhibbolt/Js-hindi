// for loop

// for(let i=0;i<=10;i++){
//     console.log(i);
//     i;
    
// }

for (let index = 0; index < 10; index++) {
    const element = index;
   // console.log(element);
    
}

//console.log(element);// not a scope of for loop iteration

// for (let i  = 0; i  < 10; i ++) {
//     console.log(`Outer loop value ${i}`);
    
//     for (let j = 0; j < 10; j++) {
//         console.log(i + '*' + j + ` = `+ i*j );//  it print table from 0 to 10 
        
//     }
// }
// const myarray = [1,2,3,4,5]
// for (let index = 0; index < myarray.length; index++) {
//     const element = myarray[index];
//     console.log(element);
    
// }

// break and continue

for (let index = 1; index <=20; index++) {
    if (index==5) {
        console.log(`detected 5`);
        break;
        
    }
   console.log(`value of i is ${index}`);
   
    
}
