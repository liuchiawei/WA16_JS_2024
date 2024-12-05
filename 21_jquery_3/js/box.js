$(function () {
    const box1 = $("#box1");

    // TODO: 各種情報の取得
    const width = box1.width()
    const height = box1.height()
    const offset = box1.offset()
    const id = box1.attr('id');

    // class を空にする
    // box1.attr('class', '')

    // text() を使って値を設定
    $("#id-info span").text(id);
    $("#width-info span").text(`${width}px`);
    $("#height-info span").text(`${height}px`);
    $("#offset-info span").text(`Top: ${offset.top}px, Left: ${offset.left}px`);

    const box2 = $("#box2");
    // TODO: 幅設定
    // box2.width(300)
    // TODO: 高さ設定
    // box2.height(50)
    box2.width(300).height(50)
    // TODO: 位置設定
    box2.offset({ left: 30, top: 380 })

    // body の高さを5000px にする
    $('body').height(5000)
});
