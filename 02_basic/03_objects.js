// Objects

// create object

const mySym = Symbol("key1")

const JsUser = {
    name:"abhishek",
    [mySym]:"mykey1",// use square bracket for accesing the symbol datatype
    age:23,
    location:"jaipur",
    email:"abhi@gmail.com",
    isloggedin:false,
    lastLoginDays:["mon","sat","fri"]
}

// accesing the object' value' 

// console.log(JsUser.email);
// console.log(JsUser["email"]);

// // how to acces symbol
// console.log(JsUser[mySym])

// JsUser.email = "bbolt@gmail.com"
// console.log(JsUser.email);
// Object.freeze(JsUser);// did not change anything after this
// JsUser.email = "hitesh@gmail.com";
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello Js User");
    
}
JsUser.greetingTwo = function(){
    console.log(`hello js user , ${this.name} `);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



