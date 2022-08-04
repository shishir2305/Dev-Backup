const bodyParser = require("body-parser");
const express = require("express");
const port = 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  var h = parseFloat(req.body.height);
  var w = parseFloat(req.body.weight);
  var result = w / (h * h);
  res.send("Your BMI = " + result);
});
app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
