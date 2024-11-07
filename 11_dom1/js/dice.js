// TODO: id=title, id=message, id=result の Element取得
const titleElement = document.getElementById("title");
const messageElement = document.getElementById("message");
const resultElement = document.getElementById("result");
const dice = document.getElementById("dice");

const dashboardWrap = document.getElementById("dashboard-wrap");
const dashboard = document.getElementById("dashboard");
const averageValue = document.getElementById("average-value");
const frequency1Value = document.getElementById("frequency-1-value");
const frequency2Value = document.getElementById("frequency-2-value");
const frequency3Value = document.getElementById("frequency-3-value");
const frequency4Value = document.getElementById("frequency-4-value");
const frequency5Value = document.getElementById("frequency-5-value");
const frequency6Value = document.getElementById("frequency-6-value");

const diceRecordsElement = document.getElementById("dice-records");
let diceRecords = [];

console.log(titleElement);
console.log(messageElement);

// TODO: titleElement に文字「DICE」を表示
titleElement.innerHTML = "DICE";
// TODO: titleElement の idを取得し、コンソール表示
console.log(titleElement.id);

// TODO: titleElement の classを取得し、コンソール表示
console.log(titleElement.className);

// TODO: titleElement に class設定
// text-red-500 text-4xl font-bold mb-4
titleElement.className = "text-red-500 text-4xl font-bold mb-4";

/**
 * randomNumber()
 * ランダムな整数
 */
const randomNumber = (min, max) => {
  //(0 - 1 のランダム) * (max + 1 - min) + min
  var number = Math.floor(Math.random() * (max + 1 - min)) + min;
  return number;
};

// 1 - 6の数字をランダムに表示、0.6秒後停止、
const randomNumberAnimation = () => {
  // 0.6秒後停止
  setTimeout(() => {
    clearInterval(randomNumberInterval);
  }, 600);
};

/**
 * @function rollDice()
 * サイコロを振る関数
 */
const rollDice = () => {
  let randomNumberAnimation = setInterval(() => {
    // 1 - 6 のランダムな数字取得
    var number = randomNumber(1, 6);
    // 0.02秒ごとに数字を表示
    resultElement.innerHTML = number;
  }, 20);

  setTimeout(() => {
    clearInterval(randomNumberAnimation);
    number = randomNumber(1, 6);
    resultElement.innerHTML = number;
    messageElement.innerHTML = `<p class="text-gray-400">${number}をふりました！</p>`;
    resultElement.dataset.number = number;
    diceRecords.push(number);
    diceRecord();
    averageValue.innerHTML = averageAll();
    frequency1Value.innerHTML = frequencyAll()[1] || 0;
    frequency2Value.innerHTML = frequencyAll()[2] || 0;
    frequency3Value.innerHTML = frequencyAll()[3] || 0;
    frequency4Value.innerHTML = frequencyAll()[4] || 0;
    frequency5Value.innerHTML = frequencyAll()[5] || 0;
    frequency6Value.innerHTML = frequencyAll()[6] || 0;
  }, 600);
};

/**
 * @function diceRecord()
 * サイコロの履歴を記録(最後の10回)する関数
 */
function diceRecord() {
    // 最後の10回の履歴を取得
    const last10Records = diceRecords.slice(-10);
    // 履歴を表示
    diceRecordsElement.innerHTML = last10Records.map(record => record).join('、');
}

/**
 * @function averageAll()
 * 平均値を計算する関数
 */
function averageAll() {
    const average = diceRecords.reduce((acc, curr) => acc + curr, 0) / diceRecords.length;
    return average.toFixed(2);
}

/**
 * @function frequencyAll()
 * 各数字の出現回数を計算する関数
 */
function frequencyAll() {
    const frequency = diceRecords.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});
    return frequency;
}
// Plan B (Another way)
// function frequencyAll() {
//   let frequency = {};
//   for (let number of diceRecords) {
//     if (frequency[number]) {
//       frequency[number]++;
//     } else {
//       frequency[number] = 1;
//     }
//   }
//   return frequency;
// }

// サイコロの実行
rollDice();
dice.onclick = rollDice;
