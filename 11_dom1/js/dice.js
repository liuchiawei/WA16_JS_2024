// TODO: id=title, id=message, id=result の Element取得
var titleElement
var messageElement
var resultElement

console.log(titleElement)
console.log(messageElement)

// TODO: titleElement に文字「DICE」を表示

// TODO: titleElement の idを取得し、コンソール表示

// TODO: titleElement の classを取得し、コンソール表示

// TODO: titleElement に class設定
// text-red-500 text-4xl font-bold mb-4

/**
 * randomNumber()
 * ランダムな整数
 */
const randomNumber = (min, max) => {
    //(0 - 1 のランダム) * (max + 1 - min) + min
    var number = Math.floor(Math.random() * (max + 1 - min)) + min
    return number
}

/**
 * rollDice()
 * サイコロを振る関数
 */
const rollDice = () => {
    // 1 - 6 のランダムな数字取得
    var number = randomNumber(1, 6)

    // TODO: resultElement に number を表示
    resultElement.innerHTML

    // TODO: messageElement に HTMLを表示
    // <p class="text-green-800">サイコロをふりました！</p>
    messageElement.innerHTML

    // TODO: data-number に number を設定
    resultElement.dataset.number
}

// サイコロの実行
rollDice()