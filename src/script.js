const gameBoard = (() => {
  let state = [null, null, null, null, null, null, null, null, null];
  return {
    state,
  };
})();
const displayController = (() => {})();
const start = document.querySelector("#startBtn");
start.addEventListener("click", () => {
  start.style.display = "none";
});
console.log("test");
