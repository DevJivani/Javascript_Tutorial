var c = 300
// let a = 300
if (true) {
    let a = 10        //  when let and const declare in scope and access outside of the scope that time error occured in let and const but not in var
    const b = 20
    var c = 30
    console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
console.log(c); // 30





function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// // ++++++++++++++++++ interesting ++++++++++++++++++


// // here two way to declare a function

// // way 1 :  in this we can access function before the function initializition

console.log(addone(5))        

function addone(num){
    return num + 1
}


// // way 2 : in this method function is stored in a variable so we cannot access before the initialization. this method called mini hoisting

addTwo(5)
const addTwo = function(num){
    return num + 2
}