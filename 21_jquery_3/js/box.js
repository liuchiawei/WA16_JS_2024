$(function () {
    const box1 = $("#box1");

    // TODO: 各種情報の取得
    const width = box1.width()
    const height = box1.height()
    const offset = box1.offset()
    const id = "";

    // text() を使って値を設定
    $("#id-info span").text(id);
    $("#width-info span").text(`${width}px`);
    $("#height-info span").text(`${height}px`);
    $("#offset-info span").text(`Top: ${offset.top}px, Left: ${offset.left}px`);

    const box2 = $("#box2");
    // TODO: 幅設定
    // TODO: 高さ設定
    // TODO: 位置設定
});
