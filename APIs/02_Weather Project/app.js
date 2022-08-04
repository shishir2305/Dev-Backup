const express = require("express");
const https = require("https");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=Howrah,India&appid=7263ebc02f3e1d4c70635726376d3c60&units=metric";

  // making a http request to the external server
  https.get(url, (response) => {
    // .on means on receiving data do this thing
    response.on("data", (data) => {
      const weatherData = JSON.parse(data); // is used to convert the result into js object
      // JSNO.stringify() turns a js object into a string
      console.log(weatherData);
      // tapping into the nested object and getting the value of tempearture
      const temp = weatherData.main.temp;
      // console.log(temp);
      // console.log(weatherData.weather[0].description);
      const icon = weatherData.weather[0].icon;
      const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

      res.write(
        "<h1>The temperature in london is " + temp + "degrees Celcius.</h1>"
      );
      res.write(
        "<h3>The weather is currently " +
          weatherData.weather[0].description +
          ".</h3>"
      );
      res.write("<img src=" + imageUrl + ">");
      // res.send(
      //   `<h1>The weather in ${weatherData.name} is ${weatherData.main.temp} degrees celcius</h1>`
      // );
      res.send();
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
