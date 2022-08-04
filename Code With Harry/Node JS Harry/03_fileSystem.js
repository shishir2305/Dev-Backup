const fs = require("fs");

// fs.readFile("test.txt", "utf-8", (err, data) => {
//   console.log(err, data);
// });

// console.log("Happy Coding");

// when printing results happy coding will be printed before the readfile beacuse node js works on single thread non blocking i/o model. When read file is executed it starts to read the file which takes sometime and once it is done it executes the call back but for the all this time code below will not wait and get executed it never blocks the code below it

const a = fs.readFileSync("test.txt");
console.log(a.toString());

console.log("Machine Learning Engineer");
// file sync blocks the code below it and executes them only after its execution

// many more functions are there such as writeFile works the same as readfile and writeFileSync works the same as readFileSync
