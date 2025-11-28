const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);       // when use current context (username , price) to access that time use the this keyword in object
        // console.log(this);     // ouput : {
                                        //     username: 'hitesh',
                                        //     price: 999,
                                        //     welcomeMessage: [Function: welcomeMessage]
                                        // }
    }

}

// console.log(this); // this keyword used for check the current context and its return the object , here output : {}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);    //  this keyword is not used in function , output:undefined
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);  // output:{}
// }


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))
