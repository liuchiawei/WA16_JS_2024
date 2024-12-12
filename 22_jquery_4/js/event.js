// バニラJS
// document.getElementById('click-button').addEventListener("click", function () { 
//     document.getElementById("result-event").innerText = 'クリックしました'
//  })

// jqon
// clickイベント
// TODO: id=click-button にclickイベント追加
$('#click-button').on('click', function () {
    // TODO: id=result-event にメッセージ表示
    $("#result-event").text('クリックしました')
});

// changeイベント
$("#select-list").on("change", function () {
    // TODO: 1) 自分の値を取得
    // const selected = $(this).val()
    // TODO: 2) 自分を「option:selected」でフィルタリングし、テキスト取得
    const selected = $(this).find('option:selected').text()
    const message = selected + "が選択されました";
    $("#result-event").text(message);
});

// 複数インベント
$('#input-text').on({
    input: function () {
        // TODO: 自分の値を取得
        const inputText = $(this).val()
        $("#result-event").text(inputText)
    },
    focus: function () {
        // TODO: 自分の class=bg-blue-100 追加
        $(this).addClass('bg-blue-100')
    },
    blur: function () {
        // TODO: 自分の class=bg-blue-100 削除
        $(this).removeClass('bg-blue-100')
    }
});

// clickイベント（イベントデリゲーション）
$('#item-list').on('click', 'li', function () {
    const message = $(this).text() + "が選択されました"
    $("#result-event").text(message)

    // TODO: #item-list li で class=bg-orange-100 をすべて削除
    $('#item-list li').removeClass('bg-orange-100')
    // TODO: 自分に class=bg-orange-100 を追加
    $(this).addClass('bg-orange-100')
});

// マウスオーバー イベントハンドラー
const mouseOverHandler = function (event) {
    $(this).text('マウスオーバー')
}

// マウスアウトイベントハンドラー
const mouseOutHandler = function (event) {
    $(this).text('')
}

// マウスオーバーイベント
$('#box').on('mouseover', mouseOverHandler)
// マウスアウトイベント
$('#box').on('mouseout', mouseOutHandler)
// クリックイベント
$('#event-off-button').on('click', function () {
    // TODO: mouseover, mouseoutイベント解除
    $('#box').off('mouseover', mouseOverHandler)
    $('#box').off('mouseout', mouseOutHandler)
});