// 定数: くじの価格、賞金、最大番号
const LOTTERY_COST = 300;           // 1回300円
const PRIZE_AMOUNT_1 = 700000000;   // 1等賞金
const PRIZE_AMOUNT_2 = 1000000;     // 2等賞金
const MAX_NUMBER_1 = 20000000;      // 1等の最大番号
const MAX_NUMBER_2 = 5000000;       // 2等の最大番号
var prizeWon = 0;
var attempts = 0;
var totalCost = 0;
var isWinner = false;
var winningNumber1 = "";
var winningNumber2 = "";
var lifetimeProfit = 0;

function init() {
    // 生涯収支
    lifetimeProfit = 0
    // 初期メッセージ
    document.getElementById("message").innerHTML = `
        <p>1等 ${PRIZE_AMOUNT_1.toLocaleString()}円！</p>
        <p>2等 ${PRIZE_AMOUNT_2.toLocaleString()}円！</p>
        <p>1回 ${LOTTERY_COST}円</p>
        `;
    document.getElementById("result").innerHTML = "1等当選するまで計算します！";
}

// シミュレーション関数
async function simulateStart() {
    isWinner = false;
    // 1等番号
    winningNumber1 = Math.floor(Math.random() * MAX_NUMBER_1) + 1;
    // 2等番号
    winningNumber2 = Math.floor(Math.random() * MAX_NUMBER_2) + 1;

    // １等当選するまでループ
    while (!isWinner) {
        // 試行回数
        attempts++;
        // くじを引く
        const ticketNumber = Math.floor(Math.random() * MAX_NUMBER_1) + 1;
        // 総コストを計算
        totalCost += LOTTERY_COST;

        // 当選チェック
        if (ticketNumber === winningNumber1) {
            // 1等
            prizeWon = PRIZE_AMOUNT_1;
            isWinner = true;
        } else if (ticketNumber === winningNumber2) {
            // 2等
            prizeWon = PRIZE_AMOUNT_2;
        }
    }

    showResult();
}

function showResult() {
    // 今回の収支計算
    const profit = prizeWon - totalCost;
    // 生涯収支計算
    lifetimeProfit += profit;

    // １等当選表示
    document.getElementById("result").innerHTML = "🎉 1等当選！";
    document.getElementById("lotteryNumber").innerHTML = winningNumber1;

    // 収支表示
    document.getElementById("attempts").textContent = attempts.toLocaleString();
    document.getElementById("cost").textContent = totalCost.toLocaleString();
    document.getElementById("profit").textContent = profit.toLocaleString();
    document.getElementById("lifetime-profit").textContent = lifetimeProfit.toLocaleString();
}

init();