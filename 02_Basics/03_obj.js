// objects can be declared in the two ways one is literal and one is constructor 

// 1. literal example
//  let person = {
//     name : "Pravin",
//     age : 20
//  }
// console.log(person) // o/p = { name: 'Pravin', age: 20 }

// 2. Constructor Object:
function ConstructorObject(userName){
    this.userName = userName;
}

 let constructorObject  = new ConstructorObject("Pravin")
 console.log(constructorObject) // o/p = ConstructorObject { userName: 'Pravin' }


 const personPrototype = {
    greet: function() {
      console.log('Hello Mr.' + this.name);
    }
  };
  
  const john = Object.create(personPrototype);
  john.name = 'John';
  john.greet() // o/p = Hello Mr.John 
  

// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

let newSymbo = Symbol("newSymbol")

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    [newSymbo] : "Pravin",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) // if you write this then it will not allow you to make changes in JsUser object ;
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

JsUser.greetingThree = function(userName = this.name) // userName = default name ie userName = Hitesh if there is no argument in greeingThree()
 {
    console.log(`Hello JS user, ${userName}`);
}

JsUser.greeting();
JsUser.greetingTwo();
JsUser.greetingThree("Pravin") // o/p = Hello JS user, Pravin

