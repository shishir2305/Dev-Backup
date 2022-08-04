const http = require("http");
const port = process.env.PORT || 3000; // if the port is ready then listen on that one else go for port 3000
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  console.log(req);
  res.setHeader("Content-Type", "text/html"); // to specify content type
  res.end("<h1>Full Stack Developer</h1>"); // to send response
});
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
// if you want to check whether its running or not then simply visit localhost:3000 or whatever is your port name
