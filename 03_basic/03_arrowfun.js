/// arrow function

const user ={
    username:"abhi",     // this.=>refers current context
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website `);
        console.log(this);
        
        
    }


}

// user.welcomeMessage()
// user.username = "change"
// user.welcomeMessage()

//console.log(this);// it print empty element i.e {}


// function chai(){
//     let username= "abhi"
//     console.log(this.username);//undefined is print
    
// }

// chai()

// const chai = () => {
//     let username = "abhi"
//     console.log(this);

// }
// chai() is will also show empty function 


// arrow function
// const addtwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addtwo(2,3));

// const addtwo1=(num1,num2)=> num1+num2
// console.log(addtwo1(1,1));

const addtwo1 = (num1, num2) => (num1 + num2)
console.log(addtwo1(1, 1));


// iife(immediately invoked function expression)

// function chai(){
//     console.log(`db connected`);
    
// }()// showing error so we use ()

(function chai() {
    console.log(`db connected`);

}) ();// it show error

    ( () => {
        console.log(`db connected`);

    })()