const express = require("express");
const path = require("path");
const port = 3000;
const app = express();

app.use(express.static(path.join(__dirname, "public"))); // middlewares are those which have access to req and response cycle

// creating our own middleware
// const shishir=(req,res,next)=>{
//     // all of your code
// } and we have next function which we call to specify which middleware will run after this one.

app.get("/hello/:name", (req, res) => {
  res.send("Full Stack Developer " + req.params.name); // we can also send names as parameters
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
