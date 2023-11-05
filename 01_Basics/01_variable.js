const accountId = 144553
let accountEmail = "pravin.com"
var accountPassword = "12345"
accountCity = "India"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Mumbai"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


// let vs const vs var
//   var                         |          let , const
// var is there in old js        |          let const are in new js
//  var function scoped          |          let const braces scoped hota hai 
    // hota hai => var apne      |   
    // parent function mein      |
    // kahi bhi use ho sakta hai |
// var adds itself to the window |          let const doesn't adds 
//    object