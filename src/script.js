const gameBoard = (() => {
  let state = ["", "", "", "", "", "", "", "", ""];
  const board = () => {
    document.getElementById("board").style.display = "grid";
    const boxes = document.querySelectorAll("#box");
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].innerHTML = state[i];
      boxes[i].setAttribute("id", i);
    }
  };

  return {
    board,
    state,
  };
})();
const displayController = (() => {
  const startPage = () => {
    const startBtn = document.querySelector("#startBtn");
    startBtn.addEventListener("click", () => {
      document.querySelector("#startPage").style.display = "none";
      gameBoard.board();
    });
  };
  return {
    startPage,
  };
})();
// player factory functions
// TODO: Build the functions that allow players to add marks to a specific spot on the board, and then tie it to the DOM, letting players click on the gameboard to place their marker.
const Player = (marker) => {
  let playerOne = {
    marker: marker,
  };

  const boxes = document.querySelectorAll("#box");
  let box = Array.from(boxes);
  //TODO: tie marker to array and display array value on box
  const move = () => {
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].addEventListener("click", () => {
        gameBoard.state[i] = playerOne.marker;
        boxes[i].innerHTML = playerOne.marker;
        // console.log("test");
        isWinner();
      });
    }
  };

  return {
    move,
    playerOne,
  };
};
const wasim = Player("x");
wasim.move();

const isWinner = () => {
  const winners = [
    [0, 1, 2],
    [0, 3, 6],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [0, 4, 8],
  ];
  return winners.find(function (winner) {
    if (
      gameBoard.state[winner[0]] === wasim.playerOne.marker &&
      gameBoard.state[winner[1]] === wasim.playerOne.marker &&
      gameBoard.state[winner[2]] === wasim.playerOne.marker
    ) {
      alert("win");
    }
  });
};
