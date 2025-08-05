// there are two types of datatypes based on how to store data in memory and how to take data. 1) primitive 2) non-primitive

//  Primitive     ---> store the copy of the data

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')   // symbol is used for making a unique value 

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

// const myFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof score);        // number
// console.log(typeof scoreValue);     // number
// console.log(typeof isLoggedIn);     // boolean
// console.log(typeof outsideTemp);    // object
// console.log(typeof userEmail);      // undefined
// console.log(typeof id);     // symbol
// console.log(typeof heros);      // object
// console.log(typeof myObj);      // object
// console.log(typeof myFunction);     // function


// https://262.ecma-international.org/5.1/#sec-11.4.3



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

/* -->  there are two types of memory 
        1) stack -> used on primitive types where store the copy of the value
        2) heap -> used on non-primitive where store the reference of the value
*/

let name = "devjivani";
name = "hellllllll"
let username = name;
username = "djpatel";
console.log(username);  // hellllllll
console.log(name);  // djpatel


let userone = {
    email : "hello.com",
    upi : "user.ybl"
}

let usertwo = userone;

usertwo.email = "world.com"

console.log(userone.email)  // world.com
console.log(usertwo.email)  // world.com


   