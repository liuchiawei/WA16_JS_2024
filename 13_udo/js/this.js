// TODO: thisオブジェクト（グローバル）
console.log(this)

// TODO: 現在のURL
document.getElementById('window-href').innerText 
    = location.href

// TODO: ユーザエージェント
document.getElementById('window-userAgent').innerText
    = navigator.userAgent

// TODO: ウィンドウサイズ
document.getElementById('window-size').innerText
    = screen.width + " x " + screen.height

function clickEvent(element, event) {
    // Element取得
    console.log(element);

    // TODO: Elementからクラス名表示
    document.getElementById('this-object').innerText
        = element.className

    // イベント取得
    console.log(event);

    // TODO: イベントのタイプを表示
    document.getElementById('event-object').innerText
        = event.type
}