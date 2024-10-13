// dates

let myDate = new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());

// let myCreateDate = new Date(2023, 0 , 23)
// console.log(myCreateDate.toDateString());

 let myCreateDate  = new Date("2004-11-29")
// console.log(myCreateDate.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myCreateDate.getTime());

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());

newDate.toLocaleString('default',{
    weekday:"long",
    timeZone:''
})


