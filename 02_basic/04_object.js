// singelton object declaration
// const Tinderuser = new Object()
// console.log(Tinderuser);

// non-singelton object

const tinderUser = {}

tinderUser.id = "123wss"
tinderUser.name = "samay"
tinderUser.isloggged = false

//console.log(tinderUser);

const regularUser = {
    email:"abhi@gmail.com",
    fullname:{
        username:{
            firstname:"abhishek",
            lastname:"kumar"
        }
    }
}
//console.log(regularUser.fullname.username.firstname);
const obj1 = {1:"q",2:"a"}
const obj2 = {3:"e",4:"r"}

//const obj3 = {...obj1,...obj2}
const obj3 = Object.assign(obj1,obj2)
//console.log(obj3);

const user = [
    {
        id:1,
        email:"abhi@gmail.com"
    },
    {

    },
]
 user[1].email
//  console.log(tinderUser);

//  console.log(Object.keys(tinderUser));
//  console.log(Object.values(tinderUser));

 const course = {
    coursename:"js",
    price:"444",
    courseinstructor:"abhishek"
 }

 const {courseinstructor:instructor} = course
 console.log(instructor);

//  {
//     "name":"js",
//     "coursename":"js in hindi",
//     "price":"12321"

//  }
 

 
 




 