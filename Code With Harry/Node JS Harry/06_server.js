// understanding more on http servers and request and response

const http = require("http");
const fs = require("fs");
const port = process.env.PORT || 3000;
const server = http
  .createServer((req, res) => {
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    if (req.url == "/") {
      res.end("<h1>Machine Learning Engineer</h1>");
    } else if (req.url == "/about") {
      res.end("<h1>Full Stack Developer</h1>");
    } else if (req.url == "/explore") {
      res.statusCode = 200;
      const data = fs.readFileSync("test.html"); // this will serve the html page but before serving do convert it to string
      res.end(data.toString());
    } else {
      //   res.shishir(); this leads to server crash so with nodemon it updates our server simultaneously
      res.statusCode = 404;
      res.end("<h1>Not found on the server</h1>");
    }
  })
  .listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
