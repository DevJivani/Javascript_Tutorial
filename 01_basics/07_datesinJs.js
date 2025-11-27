// Dates

let myDate = new Date()
// console.log(myDate); // 2025-11-27T18:24:13.893Z

// console.log(myDate.toString());  // Thu Nov 27 2025 23:54:13 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());  // Thu Nov 27 2025
// console.log(myDate.toLocaleString());  // 11/27/2025, 11:54:13 PM
// console.log(typeof myDate);  // object

// let myCreatedDate = new Date(2023, 0, 23)     //  In function first is year , second is month index and third is date 
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)  // 1/23/2023, 5:03:00 AM
// let myCreatedDate = new Date("2023-01-14")  // 1/14/2023, 5:30:00 AM
let myCreatedDate = new Date("01-14-2023")  // 1/14/2023, 12:00:00 AM
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() // Returns the number of milliseconds elapsed since midnight, January 1, 1970 Universal Coordinated Time (UTC).

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.toString());  // Thu Nov 27 2025 23:59:29 GMT+0530 (India Standard Time)

console.log(newDate.getMonth() + 1); // 11
console.log(newDate.getDay()); // 4

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})