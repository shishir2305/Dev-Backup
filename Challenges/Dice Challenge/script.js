var image1 = document.querySelector(".img1");
var image2 = document.querySelector(".img2");
const gameOn = document.querySelector(".play");
gameOn.addEventListener("click", () => {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomDiceImage = "dice" + randomNumber1 + ".png";
  var randomImageSource = "images/" + randomDiceImage;

  image1.setAttribute("src", randomImageSource);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomDiceImageSecond = "dice" + randomNumber2 + ".png";
  var randomImageSourceSecond = "images/" + randomDiceImageSecond;
  image2.setAttribute("src", randomImageSourceSecond);

  const display = document.querySelector("h1");
  if (randomNumber1 > randomNumber2) {
    display.innerText = "Player 1 Wins";
  } else if (randomNumber1 < randomNumber2) {
    display.innerText = "Player 2 Wins";
  } else {
    display.innerText = "Draw";
  }
});
