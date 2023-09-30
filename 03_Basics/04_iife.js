// IIFE, or Immediately Invoked Function Expression, is a design pattern in JavaScript that involves wrapping a function within parentheses and immediately invoking it. This pattern is commonly used to encapsulate code and create a new scope for the variables inside the function, preventing them from polluting the global scope.

// ### Problem:
// 1. **Avoiding Global Scope Pollution:**
//    In JavaScript, variables defined in the global scope can potentially conflict with variables in other scripts or libraries, causing unintended behavior or errors.

// 2. **Module-Like Behavior:**
//    JavaScript does not have built-in support for modules (prior to ES6 modules). IIFEs can provide a way to simulate a module-like behavior by encapsulating code and keeping it separate from the global scope.

// ### Solution with Examples:

// #### 1. **Avoiding Global Scope Pollution:**

// ```javascript
// (function() {
//   var localVar = "This is a local variable";

//   // The localVar is not accessible outside this function
//   console.log(localVar);
// })();

// // This would cause an error: localVar is not defined
// console.log(localVar);
// ```

// In this example, `localVar` is scoped to the IIFE and is not accessible outside of it. It helps prevent variable pollution in the global scope.

// #### 2. **Module-Like Behavior:**

// ```javascript
// const myModule = (function() {
//   var privateVariable = "This is private";

//   function privateFunction() {
//     console.log("This is a private function");
//   }

//   return {
//     publicVariable: "This is public",
//     publicFunction: function() {
//       console.log("This is a public function");
//       console.log(privateVariable); // Access private variable
//       privateFunction(); // Access private function
//     }
//   };
// })();

// // Access public parts of the module
// console.log(myModule.publicVariable); // This is public
// myModule.publicFunction(); // This is a public function
// ```

// In this example, we've created a module-like structure using an IIFE. The IIFE encapsulates private variables and functions, exposing only what's needed publicly.

// IIFEs allow you to create a private scope, avoiding variable conflicts and providing a mechanism for module-like encapsulation in JavaScript. However, with the introduction of ES6 modules, the need for IIFEs for module encapsulation has decreased.


// Immediately Invoked Function Expressions (IIFE)
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('pravin')
