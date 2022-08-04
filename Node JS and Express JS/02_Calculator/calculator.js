const express = require("express");
const bodyParser = require("body-parser"); // body parser is used to parse the form elements i.e getting the values of elements
const app = express();
app.use(bodyParser.urlencoded({ extended: true })); // using urlencoded we can get access to form data, we have other methods as well such as json and all
const port = 3000;

app.get("/", (request, response) => {
  // __dirname gives the absolute file path of the specified element
  response.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  // console.log(req.body);
  // console.log(req.body.num1); // we get the value of the numbers
  // console.log(req.body.num2);
  var n1 = Number(req.body.num1);
  var n2 = Number(req.body.num2);
  var result = n1 + n2;

  res.send("The result of the calculation is = " + result);
});

app.listen(port, () => {
  console.log("Server creation successfull");
});
