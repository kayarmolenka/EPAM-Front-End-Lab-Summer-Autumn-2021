import { $root } from "../index";
import { player } from "./changePlayer";


function createGameZone() {
  const gameWrapper = document.createElement("div");
  const gameDescription = document.createElement("div");
  const gameZone = document.createElement("div");
  const gameZoneField = document.createElement("div");
  const gameZoneResult = document.createElement("div");

  gameWrapper.classList.add("game-wrapper");
  gameDescription.classList.add("game-description");
  gameZone.classList.add("game-zone");
  gameZoneField.classList.add("game-zone-field");
  gameZoneResult.classList.add("game-zone-result");

  gameDescription.textContent = "Tic-tac-toe";
  gameZoneResult.textContent = `Move to player of ${player}`;


  for (let i = 1; i <= 9; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.setAttribute("id", `${i}`);
    gameZoneField.append(cell);
  }

  gameZone.append(gameZoneField, gameZoneResult);
  gameWrapper.append(gameDescription, gameZone);
  $root.append(gameWrapper);
}

export default createGameZone;
