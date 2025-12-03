class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

// static method access by the only class name , not access by the object instance

const hitesh = new User("hitesh")
console.log(hitesh.createId()); // not be access

console.log(User.createId()) // can be access

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
// console.log(iphone.createId());