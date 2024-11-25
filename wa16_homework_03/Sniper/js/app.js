let score = 0;
let gameInterval;
const gameArea = document.getElementById("gameArea");
const scoreDisplay = document.getElementById("score");
const startButton = document.getElementById("startButton");

startButton.onclick = startGame;

function startGame() {
  score = 0;
  scoreDisplay.textContent = "分数: " + score;
  startButton.disabled = true;
  gameInterval = setInterval(showTarget, 1000);
}

function showTarget() {
  const target = document.createElement("div");
  target.className = "target bg-red-500 rounded-full w-10 h-10";
  target.style.top = Math.random() * (gameArea.clientHeight - 50) + "px";
  target.style.left = Math.random() * (gameArea.clientWidth - 50) + "px";
  target.style.display = "block";
  gameArea.appendChild(target);

  target.onclick = () => {
    score++;
    scoreDisplay.textContent = "分数: " + score;
    gameArea.removeChild(target);
  };

  setTimeout(() => {
    if (gameArea.contains(target)) {
      gameArea.removeChild(target);
    }
  }, 800);
}
