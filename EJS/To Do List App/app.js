const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
// const port = process.env.PORT || 3000;
const port = 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
var items = ["Buy food", "cook food", "eat food"];
app.get("/", (req, res) => {
  var day = new Date();
  var completeDate = day.toLocaleDateString("en-US", options);
  res.render("list", { kindOfDay: completeDate, newListItems: items });
});

app.post("/", (req, res) => {
  item = req.body.newItem;
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
