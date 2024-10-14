// Function

function saymyname()  {
    console.log("a");
    console.log("b");
    console.log("i");
    console.log("s");
    console.log("a");
    
}
// saymyname()
// function addTwoNumbers(nums1,nums2){// parameter
//     console.log(nums1+nums2)
// }

// addTwoNumbers(2,4)//arguments

function addTwoNumbers(nums1,nums2){
         let result = nums1+nums2
         return result // if any thing is written after return then it will not execute
     }
    
     const result = addTwoNumbers(2,3)
     //console.log("result: ",result);


    //  function loginUserMessage(username){
    //     if(username===undefined){
    //         console.log("please enter the username");
    //         return 
    //     }
    //     return `${username} just logged in`
            
     //}
     
    //  console.log(loginUserMessage(""));

// function calculateCardPrice(num1){
//     return num1

// }
// console.log(calculateCardPrice(1,4,6))// it will print only 0 index, so we ...num1

function calculateCardPrice(...num1){
    return num1

}
//console.log(calculateCardPrice(1,4,6))

const user = {
    username:"abhi",
    price:199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is${anyObject.price}`);
    
}
     
 //handleObject(user)
 handleObject({
    username:"sam",
    price:200
 })


 