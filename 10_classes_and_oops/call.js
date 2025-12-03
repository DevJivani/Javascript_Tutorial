function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password

    
}

// if we use new keyword so automatically return the object but without new ketword we write the return this keyword then the return the object 

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);