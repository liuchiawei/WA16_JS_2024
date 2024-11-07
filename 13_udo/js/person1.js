// TODO: オブジェクト定義

const characterImageElement = document.getElementById("characterImage");
const characterNameElement = document.getElementById("characterName");
const messageElement = document.getElementById("message");

// displayGreeting関数を定義
function displayGreeting() {
    // TODO: テキストボックスの入力を取得し、personオブジェクトに設定

    // TODO: greetメソッドを呼び出してメッセージを表示

    // 入力エリアを隠す
    hideInputArea();

    // キャラクター画像を表示
    createImage();
}

function createImage() {
    // 画像オブジェクトを作成
    const img = new Image();
    // TODO: 画像のソースを設定
    img.src;

    // 画像のスタイルを追加
    img.className = "w-[250px]";

    // 画像をDOMに追加
    characterImageElement.innerHTML = "";
    characterImageElement.appendChild(img);
}

/**
 * hideInputArea()
 * 入力エリアを隠す
 **/
function hideInputArea() {
    const inputArea = document.getElementById("input-area");
    inputArea.style.display = "none";
}
