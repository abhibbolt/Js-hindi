const marvel_heros = ["thor","ironman","spider"]
const dc_heros = ["super","flash","bat"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);// it take dc_heros as a another index

// const new_heros = marvel_heros.concat(dc_heros)
// console.log(new_heros)
const all_new_heros = [...marvel_heros,...dc_heros]// it is same as concat
//console.log(all_new_heros);

const another_array = [1,2,3,[2,3,4],[3,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
//console.log(real_another_array);


console.log(Array.isArray("abhishek"));
console.log(Array.from("abhishek"));
console.log(Array.from({name:"abhishek"}));




