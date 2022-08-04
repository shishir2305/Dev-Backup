// os modules
const os = require("os"); // we do not use ./ because os is a built in module
console.log(os.freemem());
console.log(os.type());
console.log(os.platform());
console.log(os.version());
console.log(os.hostname());
console.log(os.uptime());
console.log(os.totalmem());
