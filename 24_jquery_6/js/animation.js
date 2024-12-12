$(function () {
    var panel = $("#panel");
    var box1 = $("#box1");
    var box2 = $("#box2");

    $("#showBtn").on("click", function () {
        // TODO: パネルを表示
    });

    $("#hideBtn").on("click", function () {
        // TODO: パネルを非表示
    });

    $("#toggleBtn").on("click", function () {
        // TODO: パネルをトグル表示
    });

    $("#fadeInBtn").on("click", function () {
        // TODO: パネルをフェードイン
    });

    $("#fadeOutBtn").on("click", function () {
        // TODO: パネルをフェードアウト
    });

    $("#fadeToggleBtn").on("click", function () {
        // TODO: パネルをフェードトグル
    });

    $("#slideDownBtn").on("click", function () {
        // TODO: パネルをスライド表示
    });

    $("#slideUpBtn").on("click", function () {
        // TODO: パネルをスライド非表示
    });

    $("#slideToggleBtn").on("click", function () {
        // TODO: パネルをスライドトグル
    });

    $("#easingBtn").on("click", function () {
        initBox();
        // TODO: box1 を width=300px でアニメーション: easing=linear
        // TODO: box2 を width=300px でアニメーション: easing=swing
    })

    $("#animateBtn").on("click", function () {
        // TODO: box1 を連続アニメーション

        // TODO: box2 を連続アニメーション
    });

    $("#queueBtn").on("click", function () {
        const items = $('.item');
        items.addClass('hidden');

        const delayTime = 300;

        // items 繰り返し(each)
        items.each(function (i) {
            // TODO: delay()
            // TODO: queue()
            // TODO: コールバックで、class=hidden を削除
            // TODO: dequeue()
        });
    });

    function initBox() {
        box1.removeClass("bg-green-400").addClass("bg-blue-400");
        // TODO: box1 に CSS設定
        // width = 100px
        // height = 100px

        box2.removeClass("bg-blue-400").addClass("bg-green-400");
        // TODO: box2 に CSS設定
        // width = 100px
        // height = 100px
    }

    initBox();
});