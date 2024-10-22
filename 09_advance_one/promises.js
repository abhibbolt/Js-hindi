const promiseOne = new Promise(function(reslove,reject){
    //do an async task
    //DB calls, cryptography , network
    setTimeout(function()  {
        console.log('Async task is complete');
        reslove()
    }, 1000);
})

promiseOne.then(function(){
    console.log("promise consumed");
    
})

new Promise(function(reslove,reject){
    setTimeout(function(){
        console.log("async task 2");
        reslove()
        
    },1000)
}).then(function(){
    console.log("async 2 resolver");
    
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chai@gmail.com"})
    },1000)
})

promiseOne.then(function(user){
    console.log(user);
})


const promisefour = new Promise(function (resolve, reject) {{
    setTimeout(function() {
        let error = true
        if(!error){
            resolve({username:"abhishek",password:"123"})
        }
        else{
            reject('ERROE:Something went Wrong')
        }
        
    }, 1000);
}})

const username  = promisefour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(()=> console.log("the promise is resolve or j=rejected")
);


const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "Java", password: "123" })
        }
        else {
            reject('ERROE:Java went Wrong')
        }

    }, 1000);
});

async function consumePromiseFive() {
   try{
       const response = await promiseFive
       console.log(response);
   }catch (error){
    console.log(error);
    
   }
    
}
consumePromiseFive()