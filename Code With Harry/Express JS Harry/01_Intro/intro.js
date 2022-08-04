const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  //   res.send("Work hard in silence, let your success be the noise");
  //   path.join(path1, path2, path3,...) it joins all this and creates a single file path
  res.json({ name: "Shishir Jha", role: "Full Stack Developer" }); // we can also send json
});

app.listen(port, () => {
  console.log("Server creation successfull");
});
