const express = require("express");
const path = require("path");
const port = 3000;
const app = express();

app.use("/", require(path.join(__dirname, "routes/blog.js")));
// using this method we can divide the overall fnctionality in small chunks

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
