  const firstImage = document.querySelectorAll("img")[0];
  const secondImage = document.querySelectorAll("img")[1];
  const changeText = document.getElementById("refreshText"); 
  const randomNumberOne = Math.floor(Math.random() * 6) + 1;
  const randomNumberTwo = Math.floor(Math.random() * 6) + 1;

  const a = () => {
    const randomDice = "./images/dice" + randomNumberOne + ".png";
    firstImage.setAttribute("src", randomDice);
  };

  const b = () => {
    const randomDice = "./images/dice" + randomNumberTwo + ".png";
    secondImage.setAttribute("src", randomDice);
  };

  a();
  b();

  if (randomNumberOne > randomNumberTwo) {
    changeText.innerHTML = "Player 1 wins!";
 } else if (randomNumberOne < randomNumberTwo) {
    changeText.innerHTML = "Player 2 wins!";
 } else {
   changeText.innerHTML = "Draw!";
 }

 const reload = () => {
   window.location.reload();
 }




