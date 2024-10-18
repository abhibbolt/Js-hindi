// reduce
const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,currval){
//     console.log(`accumalotor: ${acc} and currval ${currval}`);
    
//     return acc + currval
// },3)
// console.log(myTotal);
// second method
// const myTotal = myNums.reduce((acc,curval)=>acc+curval,0)
// console.log(myTotal);
const shoppingCard = [
    {
        itemName:'js-course',
        price:2999
    },
    {
        itemName: 'py-course',
        price: 2999
    },
    {
        itemName: 'mob-course',
        price: 2999
    },
    {
        itemName: 'ds-course',
        price: 2999
    }
]

const total = shoppingCard.reduce((acc,cur)=>acc+cur.price,0)
console.log(total);


