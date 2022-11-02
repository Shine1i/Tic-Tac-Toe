const gameBoard = (() => {
  let state = ["x", "o", "x", "x", "o", "o", "o", "o", "o"];
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
  //TODO: tie marker to array and display array value on box
  const move = () => {
    const boxes = document.querySelectorAll("#box");
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].addEventListener("click", () => {
        gameBoard.state[i] = playerOne.marker;
        boxes[i].innerHTML = playerOne.marker;
        console.log("test");
      });
    }
  };
  return {
    move,
  };
};
const wasim = Player("x");
wasim.move();
