const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let res = myNumers.map((elm) => {
//     return elm+=10;
// })
// console.log(res)


let res = myNumers.map((elm) => {
    return elm+=10;
}).map((elms) => {
    return elms+= 20
}).filter((filtered) => {
    return filtered >= 35
})
console.log(res)


// The `fill()` method in JavaScript is used to change all elements in an array to a specified static value. It modifies the array in place and does not create a new array. The syntax for `fill()` is as follows:

// ```javascript
// array.fill(value[, start[, end]])
// ```

// - `value`: The value to fill the array with.
// - `start` (Optional): The index to start filling the array (default is 0).
// - `end` (Optional): The index to stop filling the array (default is array.length).

// Here are some common use cases for the `fill()` method:

// 1. **Filling an Array with a Specific Value**:
// ```javascript
// const arr = new Array(5).fill(0); // Creates an array of 5 elements, all initialized to 0
// console.log(arr); // Outputs: [0, 0, 0, 0, 0]
// ```

// 2. **Initializing an Array with a Pattern**:
// ```javascript
// const arr = new Array(5).fill().map((_, index) => index + 1);
// console.log(arr); // Outputs: [1, 2, 3, 4, 5]
// ```

// 3. **Replacing a Portion of an Array**:
// ```javascript
// const arr = [1, 2, 3, 4, 5];
// arr.fill(0, 1, 3); // Replaces elements from index 1 to 2 with 0
// console.log(arr); // Outputs: [1, 0, 0, 4, 5]
// ```

// 4. **Filling an Array with Objects**:
// ```javascript
// const arr = new Array(3).fill({}); // Creates an array of 3 elements, all initialized to empty objects
// console.log(arr); // Outputs: [{}, {}, {}]
// ```

// The `fill()` method is useful when you need to initialize or modify array elements with a specific value or pattern. It's often used in scenarios where you want to prepopulate an array or reset certain parts of an existing array.


// let filled = new Array(6).fill(60)
// console.log(filled)


let arrElm = [50,60,80,90,100,-10,-20,-60]

// let ress = arrElm.filter((da) => da >= 0)
// console.log(ress);


let newArrElm  = arrElm.fill(0,1,4)
console.log(newArrElm);

