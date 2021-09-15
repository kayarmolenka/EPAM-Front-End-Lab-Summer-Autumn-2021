export let player = "Player X";

export function changePlayer() {
  player === "Player X" ? (player = "Player O") : (player = "Player X");

  const fieldNamePlayer = document.querySelector(".game-zone-result");

  fieldNamePlayer.innerHTML = `Move to player of ${player}`;
}
