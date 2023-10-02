// mostly used for arrary and object


// for of

// In JavaScript, the for...of loop is primarily used to iterate over iterable objects such as arrays, strings, maps, sets, and other data structures that implement the iterable protocol. However, it cannot be used to directly iterate over regular JavaScript objects (plain objects) because they are not iterable by default.



// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}

// Maps and does not contain any duplicate value
// In JavaScript, the `Map` is a built-in data structure that allows you to store key-value pairs where both the keys and values can be of any data type, including objects, functions, and primitives. The primary reasons for using a `Map` include:

// 1. **Flexible Key Types**: Unlike regular JavaScript objects, which only allow string or symbol keys, `Map` allows for a wide range of key types, including objects, functions, numbers, strings, etc. This makes it versatile for different use cases.

// 2. **Order of Insertion**: A `Map` preserves the order of key-value pairs as they were inserted. This is important when the order of the keys is significant.

// 3. **Efficient Search and Retrieval**: `Map` provides efficient methods for key-based retrieval and deletion, such as `get`, `has`, and `delete`.

// 4. **Iterability**: You can easily iterate over the key-value pairs in a `Map` using various built-in methods like `forEach`, making it useful for operations that involve all the entries.

// 5. **Better Performance for Frequent Key Lookups**: For scenarios where frequent additions and removals of key-value pairs occur, `Map` can be more efficient than using plain objects.

// Here's a simple example of how to use a `Map`:

// ```javascript
// const myMap = new Map();

// myMap.set('name', 'Alice');
// myMap.set('age', 30);

// console.log(myMap.get('name')); // Output: Alice
// console.log(myMap.has('age'));  // Output: true

// // Iterating over entries in the Map
// myMap.forEach((value, key) => {
//   console.log(`${key}: ${value}`);
// });
// ```

// In this example, we create a `Map` and add key-value pairs using the `set` method. We then retrieve values using `get`, check if a key exists with `has`, and iterate over the entries using `forEach`.


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }



// ***************
 let maps = new Map();

 maps.set("name","Pravin");
 maps.set("age",45)

for (const keys of maps) {
    // console.log(keys)
}


// this is how we can convert array into object 

let arr_to_obj = (arrs) => {
    let obj = {};

    arrs.map((newElm,ind)=>{
         obj[ind] = newElm
    })

    return obj;
}

let arrElm = ['a','b','c']
let res = arr_to_obj(arrElm) 

console.log(res)

