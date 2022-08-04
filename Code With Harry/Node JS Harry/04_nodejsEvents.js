// understanding and creating new events in node js

const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

// eventEmitter.on("complete", () => {
//   console.log("You have sucessfully become a Full Stack Developer");
// }); eventEmitter.emit() to emit the create event

eventEmitter.on("success", (num, company) => {
  console.log(
    `On ${num} I successfully became a software engineer at ${company}`
  );
  setTimeout(() => {
    console.log("Machine Learning Engineer");
  }, 3000);
});

eventEmitter.emit("success", 23, "amazon");
console.log("Full Stack Developer");
