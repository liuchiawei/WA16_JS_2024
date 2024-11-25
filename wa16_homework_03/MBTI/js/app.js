// 変数作成
const questionContainer = document.getElementById("question-container");
const questionImg = document.getElementById("question-img");
const yesBtn = document.getElementById("yes-button");
const noBtn = document.getElementById("no-button");
const resultContainer = document.getElementById("result-container");
const result = document.getElementById("result");
const restartBtn = document.getElementById("restart-btn");
const div = document.createElement("div");

let currentQuestionIndex = 0;
let mbtiScore = {
  "E/I": 0,
  "S/N": 0,
  "F/T": 0,
  "J/P": 0,
};
let mbtiType = {};

// 関数作成
/**
 * 問題を表示する関数
 */
function showQuestion() {
  questionImg.style.background = `url(img/${questions[currentQuestionIndex].id}.jpg) center/cover no-repeat`;
  let currentQuestion = questions[currentQuestionIndex];
  div.classList.add("text-justify", "p-6", "text-md");
  div.innerHTML = currentQuestion.content;
  questionContainer.append(div);
}

/**
 * スコアを計算する関数
 */
function score(point) {
  let currentQuestion = questions[currentQuestionIndex];
  let score = currentQuestion.score * point;
  mbtiScore[currentQuestion.type] += score;
  console.log(mbtiScore);
  console.log(score);
}

/**
 * 結果を表示する関数
 */
function showResult() {
  if (mbtiScore["E/I"] > 0) {
    mbtiType["E/I"] = "E";
  } else {
    mbtiType["E/I"] = "I";
  };
  if (mbtiScore["S/N"] > 0) {
    mbtiType["S/N"] = "S";
  } else {
    mbtiType["S/N"] = "N";
  };
  if (mbtiScore["F/T"] > 0) {
    mbtiType["F/T"] = "F";
  } else {
    mbtiType["F/T"] = "T";
  };
  if (mbtiScore["J/P"] > 0) {
    mbtiType["J/P"] = "J";
  } else {
    mbtiType["J/P"] = "P";
  };
  const resultType = mbtiType["E/I"] + mbtiType["S/N"] + mbtiType["F/T"] + mbtiType["J/P"];

  resultContainer.classList.remove("hidden");
  
  div.classList.add("p-6", "text-4xl", "font-bold");
  div.innerHTML = resultType;
  result.style.opacity = "0";
  result.classList.add("fade-up");
  result.append("あなたのMBTIタイプは：", div);
}

function yes() {
  questionContainer.classList.add("swipe-right");
  score(1);
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    setTimeout(() => {
      questionContainer.classList.remove("swipe-right");
      showQuestion();
    }, 400);
  } else {
    showResult();
  }
}

function no() {
  score(-1);
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    questionContainer.classList.add("swipe-left");
    setTimeout(() => {
      questionContainer.classList.remove("swipe-left");
      showQuestion();
    }, 400);
  } else {
    showResult();
  }
}




// イベント設定
yesBtn.onclick = yes;
noBtn.onclick = no;

// キーボード操作
document.onkeydown = function(event) {
  if (event.key === "ArrowRight") {
    yes();
  } else if (event.key === "y") {
    yes();
  } else if (event.key === "n") {
    no();
  } else if (event.key === "ArrowLeft") {
    no();
  }
}

restartBtn.onclick = function() {
  location.reload();
}

showQuestion();
