 const userEmail = "abhi@gmail.com"
 if(userEmail){
    console.log("got user email");
 }
 else{
    console.log("dont have user email");
    
 }

 // falsy value
//false , 0 , -0, BigInt 0n, "",null,undefined, NaN
// truthy value
// "0" , "false" , " "  ,[]  , {} , function(){}

// if(userEmail.length ===0){
//     console.log("array is empty");
// }

const emptyObj = {}
    if(Object.keys(emptyObj).length ===0){
        console.log("object is empty");
        
    }

    // Nullish Coalescing Operator (??) Null Undefined

    let val1;
    val1 = 5 ?? 10



    console.log(val1);
    