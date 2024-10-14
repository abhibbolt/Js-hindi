const name = "abhishek"
const repoCount = 50

//console.log(name + repocount + "value") // not  use in modern days

console.log(`helloji my name is ${name} and my repo is ${repoCount}`);

const gameName = new String('abhishek-bb')
console.log(gameName[1]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'))

const newString = gameName.substring(0,4)
console.log(newString); // not include last charactor ir a(whicj is index of 4)

const anotherString = gameName.slice(-8, 4)
console.log(anotherString); // it print chartor at index 3

const newStringOne = "    abhishek   "
console.log(newStringOne)
console.log(newStringOne.trim()); // it Eliminate the space

const url = "https://abhishek.com/abhi%20bbolt/"
console.log(url.replace('%20', '-'));

console.log(url.includes('bbolt'));







