const { __esModule } = require("@testing-library/jest-dom/dist/matchers");

var obj = {
  name: "Shishir Jha",
  role: "Full Stack Developer",
  dream: "Machine Learning Engineer",
};

module.exports = obj;

// whenever we expor somemthing node js wraps all the content in a function called module wrapper function

// (function(exports,require,module, __filename,__dirname){
//     var obj = {
//         name: "Shishir Jha",
//         role: "Full Stack Developer",
//         dream: "Machine Learning Engineer",
//       };

//       module.exports = obj;
// })
// console.log(exports, require, module, __filename, __dirname); console logs everything
