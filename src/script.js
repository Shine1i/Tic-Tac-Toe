const gameBoard = (() => {
  let state = ["", "", "", "", "", "", "", "", ""];
  const board = () => {
    document.getElementById("board").style.display = "grid";
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
      document.querySelector("#markers").style.display = "grid";
    });
  };
  return {
    startPage,
  };
})();
// player factory functions
const Player = (marker) => {
  let playerOne = {
    marker: marker,
  };
  const markers = () => {
    const x = document.querySelector("#xBtn");
    const o = document.querySelector("#oBtn");
    x.addEventListener("click", () => {
      playerOne.marker = "x";
      gameBoard.board();
      document.querySelector("#markers").style.display = "none";
    });
    o.addEventListener("click", () => {
      playerOne.marker = "o";
      gameBoard.board();
      document.querySelector("#markers").style.display = "none";
    });
  };
  const boxes = document.querySelectorAll("#box");
  //TODO: tie marker to array and display array value on box
  const move = () => {
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].addEventListener("click", () => {
        gameBoard.state[i] = playerOne.marker;
        boxes[i].innerHTML = playerOne.marker;
        boxes[i].style.pointerEvents = "none";
        // console.log("test");
        isWinner();
        turn();
        if (playerOne.marker === 'o'){
          boxes[i].style.color = '#C17FEC';
        }else{
          boxes[i].style.color = '#74D1F1';
        }
      });
    }
  };
  const turn = () => {
    if (playerOne.marker === "x") {
      playerOne.marker = "o";
    } else {
      playerOne.marker = "x";
    }
  };
  return {
    move,
    playerOne,
    markers,
  };
};

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
      gameBoard.state[winner[0]] === player.playerOne.marker &&
      gameBoard.state[winner[1]] === player.playerOne.marker &&
      gameBoard.state[winner[2]] === player.playerOne.marker
    ) {

      const boxes = document.querySelectorAll("#box");
      for (let i = 0; i < boxes.length; i++) {
        boxes[i].setAttribute("id", i);
        boxes[winner[0]].classList.add("box-win")
        boxes[winner[1]].classList.add("box-win")
        boxes[winner[2]].classList.add("box-win")
        boxes[i].style.pointerEvents = "none";
      }

    }
    // check for draw
    if (
      gameBoard.state[0] !== "" &&
      gameBoard.state[1] !== "" &&
      gameBoard.state[2] !== "" &&
      gameBoard.state[3] !== "" &&
      gameBoard.state[4] !== "" &&
      gameBoard.state[5] !== "" &&
      gameBoard.state[6] !== "" &&
      gameBoard.state[7] !== "" &&
      gameBoard.state[8] !== ""
    ) {
      const boxes = document.querySelectorAll("#box");
      for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.pointerEvents = "none";
        boxes[i].style.backgroundColor = 'gray';

      }
    }
  });
};
const player = Player();
player.markers();
player.move();
