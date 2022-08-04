const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // home route
  // what should happen if someone makes a get request to the "/" page
  res.send("<h1>Hello Shishir</h1>"); // to send a response
});

app.get("/about", (req, res) => {
  // about route
  res.send("Work hard in silence, let your success be the noise");
});

app.get("/hobbies", (req, res) => {
  res.send(
    "<ul><li>Gaming</li><li>Roaming</li><li>Eating</li><li>Sleeping</li>"
  );
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
