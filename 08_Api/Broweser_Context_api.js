// // stack and heap 
// In JavaScript, the terms "stack" and "heap" are used to refer to two different types of memory storage in the context of variable and memory management.

// 1. **Stack**:
//    - The stack is a region of memory used for storing primitive data types (like numbers and booleans) and function call information (such as function parameters, local variables, and return addresses).
//    - Variables declared using "var," "let," and "const" are stored on the stack when they are defined in a function.
//    - The stack operates on a Last-In, First-Out (LIFO) basis, meaning the most recently called function is the first to be removed.

// Here's an example of how the stack works in JavaScript:

// ```javascript
// function add(a, b) {
//   const sum = a + b; // 'a', 'b', and 'sum' are stored on the stack
//   return sum;
// }

// const result = add(2, 3); // 'result' is stored on the stack
// ```

// In this example, the variables `a`, `b`, `sum`, and `result` are stored on the stack.

// 2. **Heap**:
//    - The heap is a region of memory used for storing complex and reference data types (such as objects and arrays).
//    - When you create an object or array, their data is stored in the heap, and the variables on the stack hold references (memory addresses) to these objects.
//    - The memory in the heap is managed automatically by the JavaScript engine (through garbage collection) to deallocate memory when objects are no longer referenced.

// Here's an example of how the heap works in JavaScript:

// ```javascript
// const obj1 = { name: 'Alice' }; // An object is created in the heap
// const obj2 = obj1; // obj2 now references the same object in the heap

// obj1.name = 'Bob'; // Modifying the object through either reference affects both

// console.log(obj2.name); // Outputs 'Bob'
// ```

// In this example, `obj1` and `obj2` hold references to the same object in the heap.

// It's important to understand that in JavaScript, you don't have direct control over memory management or memory allocation, as the language handles these details for you. You work with variables and objects, and the JavaScript engine manages the memory, including garbage collection to reclaim memory when objects are no longer in use.



// ***************************
//  heap is used for storing complex calculation eg 1+2+3+4+5+6 