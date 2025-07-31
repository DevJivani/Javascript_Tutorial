const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

/*
-> let access the within scope but var anywhere to access
-> redeclaration is allowed in var but not in let

*/

{
    let a = 12;
    var b = 24;
    var b = 23
    console.log(a)
    console.log(b)
}

console.log(b)

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])