const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')


// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);  // 13
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));  // t
// console.log(gameName.indexOf('h'));  // 0

const newString = gameName.substring(0, 4)
// console.log(newString);   // hite

const anotherString = gameName.slice(-6, -4)
// console.log(anotherString); // hc

const newStringOne = "   hitesh    "
console.log("newStringOne:"+newStringOne);   // "   hitesh    "

// trim function is used for remove the whitespace
console.log(newStringOne.trim());  // hitesh

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))   //  check word is available or not

console.log(gameName.split('h'));  // [ '', 'ites', '-', 'c-com' ]

console.log(gameName.split('-'));  // [ 'hitesh', 'hc', 'com' ]

