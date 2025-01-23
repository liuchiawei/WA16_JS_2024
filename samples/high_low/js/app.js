var resultArea = document.getElementById('result-area');
var resultDisplay = document.getElementById('result');
var myCard = document.getElementById('my-card');
var pcCard = document.getElementById('pc-card')
var retryBtn = document.getElementById('retry-btn')
var selectButtonArea = document.getElementById('select-button-area')
var scoreDisplay = document.getElementById('score-display');

var pcNumber = 0;
var myNumber = 0;
var score = 0;
var isWin = false;
var isDraw = false;

myCard.addEventListener('animationend', function() {
    myCard.innerHTML = myNumber;
    myCard.classList.remove('is-active');

    resultDisplay.innerHTML = (isWin) ? 'Win!' : 'Lose...';
    myCard.innerHTML = myNumber;
    resultArea.classList.remove('hidden');

    resultDisplay.style.display = 'block';
    selectButtonArea.style.display = 'none';
    retryBtn.style.display = 'block';

    updateScore(isWin, isDraw);
});

function randomNumber(min, max) {
    var number = Math.floor(Math.random() * (max + 1 - min)) + min;
    return number;
}

function initGame() {
    isWin = false;
    isDraw = false;

    // PCのカードをランダムで取得し、pcNumberに設定
    pcNumber = randomNumber(1, 13);
    pcCard.innerHTML = pcNumber;

    myCard.innerHTML = "";

    resultDisplay.style.display = 'none';
    retryBtn.style.display = 'none';
    selectButtonArea.style.display = 'block';

    // 全てのボタンを表示
    document.getElementById('low-btn').style.display = 'inline';
    document.getElementById('draw-btn').style.display = 'inline';
    document.getElementById('high-btn').style.display = 'inline';
}

function checkGame() {
    myCard.classList.add('is-active');
}

function updateScore(isWin, isDraw) {
    if (isWin) {
        // Draw: 10 Win : 1
        score += isDraw ? 10 : 1;
    } else {
        // Lose: -2
        score -= 2;
    }
    scoreDisplay.innerHTML = score;
}

function choiceHigh() {
    myNumber = randomNumber(1, 13);
    isWin = (myNumber > pcNumber);
    checkGame();
}

function choiceLow() {
    myNumber = randomNumber(1, 13);
    isWin = (myNumber < pcNumber);
    checkGame();
}

function choiceDraw() {
    myNumber = randomNumber(1, 13);
    isWin = (myNumber == pcNumber);
    checkGame();
}

initGame();