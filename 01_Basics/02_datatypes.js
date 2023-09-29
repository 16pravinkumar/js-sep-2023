"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high

console.log("pravin")


let name = "pravin"
let age = 18
// let isLoggedIn = false
// let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object


// two imp links for study deeply
// 1.   https://tc39.es/ecma262/
// 2.   https://developer.mozilla.org/en-US/docs/Web/JavaScript




// some other datatypes in js***********************************************


// JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;



console.log("***************************************************************************")
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


console.log("***************************************************************************")
// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "pravin",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3




console.log("***************************************************************************")

// stack is used for primitive and heap is used for non-primitive 

// jab koi memeory stack ke andar initialize kiya jata hai tab uska copy banta hai
// aur voh dushre value ke pass jata hai original nhi jata 
// e.g
  let myName = "Pravin";
  let myAnotherName = myName; //myName meh joh data hai uska copy myAnotherName meh a jayega i.e myAnotherName = "Pravin"
  myAnotherName = "Sharma" // idr hum myAnotherName ke data ko change kar rhye hai per humare original data meh kuch changes nhi ho ga i.e myName meh "Pravin " he rhye ga 
  console.log(myName);
  console.log(myAnotherName);

