$(function () {
    // クラス定義
    class Player {
        constructor(value) {
            this.id = value.id;
            this.name = value.name;
            this.imagePath = value.imagePath;
            this.furigana = value.furigana;
            this.age = value.age;
            this.gender = value.gender;
            this.ability = value.ability;
            this.likes = value.likes;
            this.description = value.description;
        }

        greet() {
            addMessage(`${this.name}（${this.furigana}）、${this.age}歳。`, this.name);
            addMessage(`好きなことは、${this.likes}。`, this.name);
            addMessage(`得意なことは、${this.ability}です。`, this.name);
            showMessages();
        }
    }

    const statusContainer = $("#status-container");
    const selectButton = $("#select-button");
    const messageElement = $("#message");
    const selectCharacterElement = $("#select-character");
    const characterNameElement = $("#characterName");
    const playerImageElement = $("#playerImage");
    const thumbnailContainer = $("#thumbnail-container");
    const continueMark = $("#continue-mark");

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
        players.forEach(player => {
            const thumb = $("<img>");
            thumb.attr("id", "player-" + player.id);
            thumb.attr("src", player.imagePath);
            thumb.addClass("thumbnail-image w-24 h-24 object-cover rounded-full border-2 cursor-pointer");
            thumb.on("click", () => selectPlayer(player));
            thumbnailContainer.append(thumb);
        });
    }

    /**
     * キャラクターの詳細をステータスエリアに表示
     */
    function displayStatus(player) {
        showImage(player.imagePath);
        $("#player-name").text(player.name);
        $("#player-furigana").text(`(${player.furigana})`);
        $("#player-description").text(player.description);
    }

    /**
     * 画像を選択
     */
    function selectPlayer(player) {
        if (!player) return;

        selectedPlayer = player;

        displayStatus(player);

        const text = `「${player.name}」でゲームをはじめますか？\nよろしければ【決定】ボタンをおしてください。`;
        showMessage(text);

        selectButton.removeClass("hidden").addClass("blink");

        $(".thumbnail-image").removeClass("border-blue-500");
        $(`#player-${selectedPlayer.id}`).addClass("border-blue-500");
    }

    /**
     * showImage()
     * キャラクターイメージ表示
     */
    function showImage(imagePath) {
        playerImageElement.empty();
        if (imagePath) {
            const image = $("<img>");
            image.attr("src", imagePath);
            image.addClass("w-[300px] rounded-xl slide-in");
            playerImageElement.append(image);
        }
    }

    /**
     * addMessage()
     * メッセージ配列に追加
     */
    function addMessage(text, name = "") {
        messages.push({ text: text, name: name });
    }

    /**
     * showMessages()
     * メッセージの配列を順に表示
     */
    function showMessages() {
        currentMessageIndex = 0;
        const message = messages[currentMessageIndex];
        showMessage(message.text, message.name);
    }

    /**
     * showMessage()
     * 単一メッセージ表示（タイプライター風）
     */
    function showMessage(message, name = "") {
        clearTimeout(typingTimeout);
        messageElement.text("");

        if (name) characterNameElement.text(name);

        continueMark.addClass("hidden");

        let messageIndex = 0;
        function typeMessage() {
            if (messageIndex < message.length) {
                let char = message[messageIndex];
                if (char === "\n") char = "<br>";
                messageElement.html(messageElement.html() + char);
                messageIndex++;
                typingTimeout = setTimeout(typeMessage, 50);
            } else if (currentMessageIndex < messages.length - 1) {
                continueMark.removeClass("hidden").addClass("blink");
            }
        }

        typeMessage();
    }

    /**
     * nextMessage()
     * 次のメッセージを表示
     */
    function nextMessage() {
        if (currentMessageIndex < messages.length - 1) {
            currentMessageIndex++;
            const message = messages[currentMessageIndex];
            showMessage(message.text, message.name);
        }
    }

    /**
     * hideInputArea()
     * 入力エリアを隠す
     */
    function hideInputArea() {
        selectCharacterElement.addClass("hidden");
        selectButton.addClass("hidden");
    }

    /**
     * ゲームスタート
     */
    // 決定ボタンのクリックイベントを登録
    $("#select-button").on("click", function () {
        if (selectedPlayer.id) {
            const player = new Player(selectedPlayer);
            player.greet();
            hideInputArea();
        } else {
            showMessage("キャラクターを選択してください。");
        }
    });

    /**
     * Keydownイベント
     * Enterキーで次のメッセージへ進む
     */
    $(document).on("keydown", function (event) {
        if (event.key === "Enter") {
            nextMessage();
        }
    });

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
});