// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// console.log("Before Push :" + myArr);


// // Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()  // last value remove

// console.log("Aefore Push :" + myArr);

// myArr.unshift(9)     // 9 is added to the first index
// // myArr.shift()  // first index value is removed

// console.log(myArr);


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()       // joins convert the array values in string

// console.log(myArr);
// console.log(typeof newArr);


// slice, splice

// console.log("A ", myArr);   //   A  [ 0, 1, 2, 3, 4, 5 ]

// const myn1 = myArr.slice(1, 3)   

// console.log(myn1);  // [ 1, 2 ]
console.log("B ", myArr);   //  B  [ 0, 1, 2, 3, 4, 5 ]


const myn2 = myArr.splice(2, 3)
console.log(myn2);   //  [ 1, 2, 3 ]
// console.log("C ", myArr);       //   C  [ 0, 4, 5 ]

