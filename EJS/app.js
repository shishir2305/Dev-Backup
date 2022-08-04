const express = require("express");
const bodyParser = require("body-parser");
// const port = process.env.PORT || 3000;
const port = 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
app.get("/", (req, res) => {
  var today = new Date();
  var day = days[today.getDay()];
  res.render("list", { kindOfDay: day });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
