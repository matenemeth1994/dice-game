const secondImage = document.querySelectorAll("img")[1];
const changeText = document.getElementById("refreshText");
const firstImage = document.querySelectorAll("img")[0];

const roll = () => {
  const randomNumberOne = Math.floor(Math.random() * 6) + 1;
  const randomNumberTwo = Math.floor(Math.random() * 6) + 1;
  const playerOneDice = () => {
    const randomDice = "./images/dice" + randomNumberOne + ".png";
    firstImage.setAttribute("src", randomDice);
  };

  const playerTwoDice = () => {
    const randomDice = "./images/dice" + randomNumberTwo + ".png";
    secondImage.setAttribute("src", randomDice);
  };

  playerOneDice();
  playerTwoDice();

  if (randomNumberOne > randomNumberTwo) {
    changeText.innerHTML = "Player 1 wins!";
  } else if (randomNumberOne < randomNumberTwo) {
    changeText.innerHTML = "Player 2 wins!";
  } else {
    changeText.innerHTML = "Draw!";
  }
  setTimeout(() => {
    changeText.innerHTML = "Refresh me!";
  }, 3500)
};

document.getElementById("roll").addEventListener("click", roll);