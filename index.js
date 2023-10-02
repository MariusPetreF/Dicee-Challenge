let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage = "dice" + randomNumber1 + ".png";
let randomImageSource = "./images/" + randomDiceImage;
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomImageSource2 = "./images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// document.querySelectorAll("img")[1].setAttribute("src", "./images/dice" + (Math.floor(Math.random() * 6) + 1) + ".png");

if (randomNumber1 > randomNumber2) {
  document.querySelectorAll("h1")[0].textContent = "Player 1 WIN!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelectorAll("h1")[0].textContent = "Player 2 WIN!";
} else {
  document.querySelectorAll("h1")[0].textContent = "Draw";
}

// let image2 = document.querySelectorAll("img")[1];
// image2.setAttribute("src", randomImageSource2);
