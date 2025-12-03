class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    // when we use getter and setter , so both method use compulsory , if define only any one method so error could be occur.
    // constructor property(data) name and getter setter method name always same
    // and also if set and get the property of the constructor so name in both constructor and method could different if keep the same name and run the code so sometimes constructor called and then sometimes getter setter method called so stack overflow occur

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);