import './scss/styles.scss';
import createGameZone from "./components/createGameZone";
import step from "./components/step";


export const $root = document.getElementById("root");

export function startGame() {
  createGameZone();
  step();
}

startGame();