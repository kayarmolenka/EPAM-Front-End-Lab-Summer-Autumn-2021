import ResetGame from "./resetGame";

let countStep = 0;

function determineWinner(namePlayer, valuePlayer, idCell, gameField) {
  const fieldResult = document.querySelector(".game-zone-result");

  if (
    (gameField.childNodes[0].innerText === "X" &&
      gameField.childNodes[1].innerText === "X" &&
      gameField.childNodes[2].innerText === "X") ||
    (gameField.childNodes[0].innerText === "X" &&
      gameField.childNodes[3].innerText === "X" &&
      gameField.childNodes[6].innerText === "X") ||
    (gameField.childNodes[0].innerText === "X" &&
      gameField.childNodes[4].innerText === "X" &&
      gameField.childNodes[8].innerText === "X") ||
    (gameField.childNodes[1].innerText === "X" &&
      gameField.childNodes[4].innerText === "X" &&
      gameField.childNodes[7].innerText === "X") ||
    (gameField.childNodes[2].innerText === "X" &&
      gameField.childNodes[5].innerText === "X" &&
      gameField.childNodes[8].innerText === "X") ||
    (gameField.childNodes[2].innerText === "X" &&
      gameField.childNodes[4].innerText === "X" &&
      gameField.childNodes[6].innerText === "X") ||
    (gameField.childNodes[3].innerText === "X" &&
      gameField.childNodes[4].innerText === "X" &&
      gameField.childNodes[5].innerText === "X") ||
    (gameField.childNodes[6].innerText === "X" &&
      gameField.childNodes[7].innerText === "X" &&
      gameField.childNodes[8].innerText === "X")
  ) {
    fieldResult.innerHTML = "Win player X";
    ResetGame();
  }
  if (
    (gameField.childNodes[0].innerText === "O" &&
      gameField.childNodes[1].innerText === "O" &&
      gameField.childNodes[2].innerText === "O") ||
    (gameField.childNodes[0].innerText === "O" &&
      gameField.childNodes[3].innerText === "O" &&
      gameField.childNodes[6].innerText === "O") ||
    (gameField.childNodes[0].innerText === "O" &&
      gameField.childNodes[4].innerText === "O" &&
      gameField.childNodes[8].innerText === "O") ||
    (gameField.childNodes[1].innerText === "O" &&
      gameField.childNodes[4].innerText === "O" &&
      gameField.childNodes[7].innerText === "O") ||
    (gameField.childNodes[2].innerText === "O" &&
      gameField.childNodes[5].innerText === "O" &&
      gameField.childNodes[8].innerText === "O") ||
    (gameField.childNodes[2].innerText === "O" &&
      gameField.childNodes[4].innerText === "O" &&
      gameField.childNodes[6].innerText === "O") ||
    (gameField.childNodes[3].innerText === "O" &&
      gameField.childNodes[4].innerText === "O" &&
      gameField.childNodes[5].innerText === "O") ||
    (gameField.childNodes[6].innerText === "O" &&
      gameField.childNodes[7].innerText === "O" &&
      gameField.childNodes[8].innerText === "O")
  ) {
    fieldResult.innerHTML = "Win player O";
  }
  countStep++;
  if (countStep === 9) {
    console.log("Draw");
  }
}

export default determineWinner;
