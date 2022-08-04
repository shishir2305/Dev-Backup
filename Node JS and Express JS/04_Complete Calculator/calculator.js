const bodyParser = require("body-parser");
const express = require("express");
const port = 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  var n1 = parseFloat(req.body.num1);
  var op = req.body.operator;
  var n2 = parseFloat(req.body.num2);
  var result;
  if (op == "+") {
    result = n1 + n2;
  } else if (op == "-") {
    result = n1 - n2;
  } else if (op == "*") {
    result = n1 * n2;
  } else if (op == "/") {
    result = n1 / n2;
  } else {
    result = "Invalid Operation";
  }
  res.send("The result of your calculation is = " + result);
});

app.listen(port, () => {
  console.log(`server creation successful at port ${port}`);
});
