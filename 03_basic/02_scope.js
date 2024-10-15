// scope///

//var c=300
// let a=200

// if(true){//block scope 
//     let a=10
//     const b=20
//     var c=30
//     console.log("inner",a);
    

// }

// //console.log(a);// global scope
// //console.log(b);
// console.log(a);

function one(){
    const username = "abhishek"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    //console.log(website);
    //two()

}
//one()

// if(true){
//     const username = "abhi "
//     if(username==="abhi "){
//         const website = "youtube"
//         console.log(username + website);
//     }
//    // console.log(website);
    
// }
// //console.log(username);

//***   Interesting    ****** **/


console.log(addone(2))//we can declare before initialization
function addone(num){
    return num+1

}

addtwo(4)// but we can not declare it before initialization e.i called hoisting
const addtwo = function(num){
    return num+2
}


