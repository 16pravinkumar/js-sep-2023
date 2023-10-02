let obj = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby"
}

for (const key in obj) {
   console.log (key + ":" + obj[key])
}


let programming = ["js","cpp","java"]
for (const key in programming) {
  console.log
}

const myObject = {
  js: 'javascript',
  cpp: 'C++',
  rb: "ruby",
  swift: "swift by apple"
}

for (const key in myObject) {
  //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programmings = ["js", "rb", "py", "java", "cpp"]

for (const key in programmings) {
  //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }