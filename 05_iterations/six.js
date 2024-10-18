const coding = ['cpp', 'js', 'java', 'react', 'basic']

// const values = coding.forEach((item)=>{
//     console.log(item)
// return item
// })
// console.log(values);

// const myNum = [1,2,3,4,5,6,7,8,9,10]

// // const newNum = myNum.filter((num=> num>4))
// // console.log(newNum);
// const newnum = myNum.filter((num)=>{
//     return num>5       // return should be written otherwise it retrun [empty]
// })
// console.log(newnum);


const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = []
myNum.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})

console.log(newNums);



