let countStep = 0;

const ar = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];

const end = [
  null, null, null, 
  null, null, null, 
  null, null, null
];

function determineWinner(valuePlayer, idCell) {
  const fieldResult = document.querySelector(".game-zone-result");

  end[idCell - 1] = valuePlayer;

  for (let i = 0; i < ar.length; i++) {
    if (
      end[ar[i][0] - 1] === "X" &&
      end[ar[i][1] - 1] === "X" &&
      end[ar[i][2] - 1] === "X"
    ) {
      fieldResult.innerHTML = "Win player X";
    }
    if (
      end[ar[i][0] - 1] === "O" &&
      end[ar[i][1] - 1] === "O" &&
      end[ar[i][2] - 1] === "O"
    ) {
      fieldResult.innerHTML = "Win player O";
    }
  }

  countStep++;

  if (countStep === 9) {
    fieldResult.innerHTML = "Draw";
  }
}

export default determineWinner;
