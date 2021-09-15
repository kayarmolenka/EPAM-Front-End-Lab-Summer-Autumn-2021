import { player, changePlayer } from "./changePlayer";
import determineWinner from "./determineWinner";

function step() {
  const $gameZoneField = document.querySelector(".game-zone-field");

  $gameZoneField.addEventListener("click", (e) => {
    const sell = e.target;
    if (player === "Player X") {
      sell.innerHTML = "X";
      changePlayer();
      determineWinner("X", sell.innerText, sell.id, e.target.parentNode);
    } else {
      sell.innerHTML = "O";
      changePlayer();
      determineWinner("O", sell.innerText, sell.id, e.target.parentNode);
    }
  });
}

export default step;
