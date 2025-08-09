const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(3));   // 100.0    ,   if 3 -> 100.000

const otherNumber = 123.8666

console.log(typeof otherNumber)

console.log(otherNumber.toPrecision(2));  //  1.2e+2

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));  //  10,00,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));   // remove negative sign
console.log(Math.round(4.6)); // 4
console.log(Math.ceil(4.2));  // 5
console.log(Math.floor(4.9));  // 4
console.log(Math.min(4, 3, 6, 8));  // 3
console.log(Math.max(4, 3, 6, 8));  // 8

// console.log(Math.random());  // range between 0 to 1 any decimal value
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

// const min = 10
// const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min)