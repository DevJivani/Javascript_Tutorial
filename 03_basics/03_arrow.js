const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        // console.log(`${this.username} , welcome to website`);       // when use current context (username , price) to access that time use the this keyword in object
        // console.log(this);     // ouput : {
                                        //     username: 'hitesh',
                                        //     price: 999,
                                        //     welcomeMessage: [Function: welcomeMessage]
                                        // }
    }

}

user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);  //  ouput : {}

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);    //  this keyword is not used in function
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))
