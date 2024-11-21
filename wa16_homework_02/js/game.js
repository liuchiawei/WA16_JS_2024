const statusContainer = document.getElementById("status-container");
const selectButton = document.getElementById('select-button')
const messageElement = document.getElementById("message");
const selectCharacterElement = document.getElementById("select-character")
const characterNameElement = document.getElementById("characterName");
const playerImageElement = document.getElementById("playerImage");
const thumbnailContainer = document.getElementById("thumbnail-container");
const continueMark = document.getElementById("continue-mark");

// 選択キャラクター
var selectedPlayer = {};
// 複数メッセージ
var messages = [];
// 複数メッセージインデックス
var currentMessageIndex = 0;
// タイピングアニメーションの状態
var typingTimeout;

/**
 * サムネイル画像を生成
 */
function createThumbnails() {
    // TODO: players を for of で繰り返し
    for (const player of players) {
        // console.log(player)
        // --- 繰り返し（ここから） ---
        const thumb = document.createElement("img");
        // TODO: player.id を設定 player-id
        thumb.id = "player-" + player.id;
        // TODO: player.imagePath を設定
        thumb.src = player.imagePath;
        // TODO: 画像クリックイベント: selectPlayer() に player をいれる
        thumb.onclick = () => selectPlayer(player)

        // クラス設定
        thumb.className = "thumbnail-image w-24 h-24 object-cover rounded-full border-2 cursor-pointer";
        // img タグを thumbnailContainer に追加
        thumbnailContainer.appendChild(thumb);
        // --- 繰り返し（ここまで） ---
    }

}

/**
 * キャラクターの詳細をステータスエリアに表示
 */
function displayStatus(player) {
    // キャラクター画像表示
    showImage(player.imagePath);

    document.getElementById("player-name").textContent = player.name;
    document.getElementById("player-furigana").textContent = `(${player.furigana})`;
    document.getElementById("player-description").textContent = player.description;
}

/**
 * 画像を選択
 */
function selectPlayer(player) {
    if (!player) return;

    // キャラクター選択
    selectedPlayer = player;

    // ステータスを表示
    displayStatus(player);

    // メッセージ
    const text = `「${player.name}」でゲームをはじめますか？\nよろしければ【決定】ボタンをおしてください。`;
    showMessage(text);

    // 決定ボタン表示
    selectButton.classList.remove('hidden');
    selectButton.classList.add("blink");

    // サムネイルハイライト
    document.querySelectorAll(".thumbnail-image").forEach(img => {
        img.classList.remove("border-blue-500");
    });
    document.getElementById(`player-${selectedPlayer.id}`).classList.add("border-blue-500");
}


/**
 * showImage()
 * キャラクターイメージ表示
 **/
function showImage(imagePath) {
    // 既存の画像をクリア
    playerImageElement.innerHTML = "";
    if (imagePath) {
        const image = new Image();
        image.src = imagePath;
        image.className = "w-[300px] rounded-xl slide-in";
        playerImageElement.appendChild(image);
    }
}

/**
 * addMessage()
 * メッセージ配列に追加
 **/
function addMessage(text, name = "") {
    // 複数メッセージ
    messages.push({ text: text, name: name });
}

/**
 * showMessages()
 * メッセージの配列を順に表示
 **/
function showMessages() {
    currentMessageIndex = 0;
    var message = messages[currentMessageIndex];
    showMessage(message.text, message.name);
}

/**
 * showMessage()
 * 単一メッセージ表示（タイプライター風）
 **/
function showMessage(message, name = "") {
    // タイピング中のアニメーションをクリアし、メッセージをリセット
    clearTimeout(typingTimeout);

    // メッセージ空欄
    messageElement.textContent = "";

    // キャラクター名更新
    if (name) characterNameElement.textContent = name;

    // Enterキー非表示
    continueMark.classList.add("hidden");

    // タイピングアニメーション
    var messageIndex = 0;
    function typeMessage() {
        if (messageIndex < message.length) {
            // メッセージを1文字ずつ表示
            var char = message[messageIndex];

            // 改行コードの場合、<br> に置き換え
            if (char == "\n") char = "<br>";

            // メッセージボックスに文字追加
            messageElement.innerHTML += char;

            // 次の文字のインデックス
            messageIndex++;

            // TODO: setTimeout() で、 typeMessage() を実行
            typingTimeout = setTimeout(() => {
                typeMessage();
            }, 50);
        } else if (currentMessageIndex < messages.length - 1) {
            continueMark.classList.remove("hidden");
            continueMark.classList.add("blink");
        }
    }

    // タイピングアニメーション開始
    typeMessage();
}

/**
 * nextMessage()
 * 次のメッセージを表示
 **/
function nextMessage() {
    if (currentMessageIndex < messages.length - 1) {
        currentMessageIndex++;
        var message = messages[currentMessageIndex];
        showMessage(message.text, message.name);
    }
}

/**
 * hideInputArea()
 * 入力エリアを隠す
 **/
function hideInputArea() {
    selectCharacterElement.classList.add('hidden');
    selectButton.classList.add('hidden');
}

/**
 * ゲームスタート
 */
function start() {
    if (selectedPlayer.id) {
        // TODO: Playerインスタンス生成
        const player = new Player(selectedPlayer)
        // TODO: greet() 実行
        player.greet()

        hideInputArea();
    } else {
        showMessage("キャラクターを選択してください。");
    }
}

/**
 * Keydownイベント
 * Enterキーで次のメッセージへ進む
 */
document.onkeydown = function (event) {
    // TODO: キーボードキー「Enter」で次のメッセージ 
    // nextMessage()
    if (event.key == "Enter") {
        // 次のメッセージ表示
        nextMessage()    
    }
}

/**
 * init()
 * 初期化
 */
function init() {
    createThumbnails();
    showMessage("キャラクターを選択してください。");
}

// 初期化&開始
init();