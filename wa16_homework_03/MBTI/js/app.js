// 変数作成
const questionContainer = document.getElementById("question-container");
const questionCard = document.getElementById("question-card");
const questionImg = document.getElementById("question-img");
const questionContent = document.getElementById("question-content");
const nextQuestionCard = document.getElementById("next-question-card");
const nextQuestionImg = document.getElementById("next-question-img");
const nextQuestionContent = document.getElementById("next-question-content");
const yesBtn = document.getElementById("yes-button");
const noBtn = document.getElementById("no-button");
const resultContainer = document.getElementById("result-container");
const resultBackground = document.getElementById("result-bg");
const restartBtn = document.getElementById("restart-btn");
const resultTitle = document.getElementById("result-title");
const resultType = document.getElementById("result-type");
const resultName = document.getElementById("result-name");
const resultDescription = document.getElementById("result-description");
const div = document.createElement("div");
const infoContent = document.getElementById("info-content");
const infoBtn = document.getElementById("info-btn");

let shouldStop = false;
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
  // 問題の画像と内容を表示
  questionImg.style.background = `url(img/${questions[currentQuestionIndex].id}.jpg) center/cover no-repeat`;
  let currentQuestion = questions[currentQuestionIndex];
  questionContent.innerHTML = currentQuestion.content;

  // 次の問題の画像と内容を表示
  let nextQuestionIndex = currentQuestionIndex + 1;
  if (nextQuestionIndex < questions.length) {
    let nextQuestion = questions[nextQuestionIndex];
    nextQuestionContent.innerHTML = nextQuestion.content;
    nextQuestionImg.style.background = `url(img/${nextQuestion.id}.jpg) center/cover no-repeat`;
  } else {
    nextQuestionCard.remove();
  }
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
 * 結果を計算する関数
 * @returns testResult 結果
 */
function checkResult() {
  if (mbtiScore["E/I"] > 0) {
    mbtiType["E/I"] = "E";
  } else {
    mbtiType["E/I"] = "I";
  }
  if (mbtiScore["S/N"] > 0) {
    mbtiType["S/N"] = "S";
  } else {
    mbtiType["S/N"] = "N";
  }
  if (mbtiScore["F/T"] > 0) {
    mbtiType["F/T"] = "F";
  } else {
    mbtiType["F/T"] = "T";
  }
  if (mbtiScore["J/P"] > 0) {
    mbtiType["J/P"] = "J";
  } else {
    mbtiType["J/P"] = "P";
  }
  const resultType =
    mbtiType["E/I"] + mbtiType["S/N"] + mbtiType["F/T"] + mbtiType["J/P"];

  let testResult;
  results.forEach((result) => {
    if (result.type === resultType) {
      testResult = result;
    }
  });
  return testResult;
}

/**
 * 結果を表示する関数
 */
function showResult() {
  const result = checkResult();
  resultBackground.classList.remove("hidden");
  resultContainer.style.opacity = "0";
  resultContainer.classList.add("fade-up");
  resultTitle.classList.add(`bg-${result.color}-500`);
  resultType.innerHTML = result.type;
  resultName.innerHTML = result.name;
  resultDescription.innerHTML = result.description;
  div.innerHTML = "";
  div.classList.add(
    "w-full",
    "h-2/3",
    "top-0",
    "left-0",
    "absolute",
    `bg-${result.color}-600`,
    "z-0"
  );
  resultBackground.append(div);
  // キーボード、スワイプ操作を停止
  shouldStop = true;
}

function yes() {
  if (shouldStop) return;
  questionCard.classList.add("swipe-right");
  score(1);
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    setTimeout(() => {
      questionCard.classList.remove("swipe-right");
      showQuestion();
    }, 400);
  } else {
    showResult();
  }
}

function no() {
  if (shouldStop) return;
  score(-1);
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    questionCard.classList.add("swipe-left");
    setTimeout(() => {
      questionCard.classList.remove("swipe-left");
      showQuestion();
    }, 400);
  } else {
    showResult();
  }
}

/**
 * 操作説明を表示する関数
 */
function toggleInfo() {
  if (infoContent.classList.contains("hidden")) {
    infoContent.classList.remove("hidden");
  } else {
    infoContent.classList.add("hidden");
  }
}

/**
 * スワイプ操作
 */
function swipe() {
  if (shouldStop) return;
  // ドラッグ操作のための変数
  let isDragging = false;
  let startX = 0;

  // ドラッグ開始
  questionCard.addEventListener("mousedown", (event) => {
    isDragging = true;
    startX = event.clientX;
  });

  // ドラッグ中
  document.addEventListener("mousemove", (event) => {
    if (!isDragging) return;
    const currentX = event.clientX;
    const diffX = currentX - startX;

    questionCard.style.transform = `translateX(${diffX}px) rotate(${
      diffX * 0.1
    }deg)`;
  });

  // ドラッグ終了
  document.addEventListener("mouseup", () => {
    if (!isDragging) return;
    isDragging = false;

    const threshold = 70; // スワイプの閾値
    const currentX =
      parseFloat(
        questionCard.style.transform
          .replace("translateX(", "")
          .replace("px)", "")
      ) || 0;

    if (currentX > threshold) {
      yes(); // 右にスワイプ
    } else if (currentX < -threshold) {
      no(); // 左にスワイプ
    }

    // 元の位置に戻す
    questionCard.style.transform = "";
  });
}

// ボタン設定
yesBtn.onclick = yes;
noBtn.onclick = no;
restartBtn.onclick = function () {
  location.reload();
};
infoBtn.onclick = toggleInfo;

// 初期設定
showQuestion();
swipe();

// キーボード操作
document.onkeydown = function (event) {
  if (event.key === "ArrowRight") {
    event.preventDefault();
    yes();
  } else if (event.key === "y") {
    event.preventDefault();
    yes();
  } else if (event.key === "n") {
    event.preventDefault();
    no();
  } else if (event.key === "ArrowLeft") {
    event.preventDefault();
    no();
  }
};
