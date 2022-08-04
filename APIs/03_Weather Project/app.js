const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const { json } = require("body-parser");
const port = 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  // "https://api.openweathermap.org/data/2.5/weather?q=Howrah,India&appid=7263ebc02f3e1d4c70635726376d3c60&units=metric";
  const cityName = req.body.cityName;
  const countryName = req.body.countryName;
  const apiKey = req.body.apiKey;
  const units = req.body.units;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryName}&appid=${apiKey}&units=${units}`;
  https.get(url, (response) => {
    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const icon = weatherData.weather[0].icon;
      const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      res.write(
        `<h1>The temperature in ${cityName} is ${temp} degrees Celcius.</h1>`
      );
      res.write(
        "<h3>The weather is currently " +
          weatherData.weather[0].description +
          ".</h3>"
      );
      res.write("<img src=" + imageUrl + ">");
      res.send();
    });
  });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
