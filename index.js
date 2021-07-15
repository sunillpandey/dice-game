// Generating Random Numbers

var randomNumber1 = Math.ceil(Math.random() * 6);
var randomNumber2 = Math.ceil(Math.random() * 6);

// Assingning random numbers to dice image

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

// Winner Selection

function winnerSelection() {
  if (randomNumber1 > randomNumber2) {
    return document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    return document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  } else {
    return document.querySelector("h1").innerHTML = "Draw!";
  }
}

winnerSelection();
