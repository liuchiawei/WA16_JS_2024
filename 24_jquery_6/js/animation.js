$(function () {
    var panel = $("#panel");
    var box1 = $("#box1");
    var box2 = $("#box2");

    $("#showBtn").on("click", function () {
        // TODO: パネルを表示
        panel.show(500)
    });

    $("#hideBtn").on("click", function () {
        // TODO: パネルを非表示
        panel.hide(500)
    });

    $("#toggleBtn").on("click", function () {
        // TODO: パネルをトグル表示
        panel.toggle(500)
    });

    $("#fadeInBtn").on("click", function () {
        // TODO: パネルをフェードイン
        panel.fadeIn(500)
    });

    $("#fadeOutBtn").on("click", function () {
        // TODO: パネルをフェードアウト
        panel.fadeOut(500)
    });

    $("#fadeToggleBtn").on("click", function () {
        // TODO: パネルをフェードトグル
        panel.fadeToggle(500)
    });

    $("#slideDownBtn").on("click", function () {
        // TODO: パネルをスライド表示
        panel.slideDown(500)
    });

    $("#slideUpBtn").on("click", function () {
        // TODO: パネルをスライド非表示
        panel.slideUp(500)
    });

    $("#slideToggleBtn").on("click", function () {
        // TODO: パネルをスライドトグル
        panel.slideToggle(500)
    });

    $("#easingBtn").on("click", function () {
        initBox();
        // TODO: box1 を width=300px でアニメーション: easing=linear
        box1.animate({ width: '300px' }, 2500, 'linear')

        // TODO: box2 を width=300px でアニメーション: easing=swing
        box2.animate({ width: '300px' }, 2500, 'swing')
    })

    // 強制再読み込み
    // Win: Ctrl + Shift + R
    // Mac: Cmd + Shift + R
    $("#animateBtn").on("click", function () {
        // TODO: box1 を連続アニメーション
        box1.animate({ width: '300px', height: '50px' }, 1000)
            .animate({ opacity: 0.2 }, 1000)
            .animate({
                width: '100px',
                height: '100px',
                opacity: 1,
            }, 1000)

        // TODO: box2 を連続アニメーション
        box2.animate({ width: '50px', height: '50px' }, 1000)
            .delay(1000)
            .animate({
                width: '100px',
                height: '100px',
            }, 1000)
    });

    $("#queueBtn").on("click", function () {
        const items = $('.item');
        items.addClass('hidden');

        const delayTime = 1000;

        // items 繰り返し(each)
        items.each(function (i) {
            // TODO: delay()
            // TODO: queue()
            $(this).delay((i + 1) * delayTime).queue(() => {
                // TODO: コールバックで、class=hidden を削除
                // TODO: dequeue()
                $(this).removeClass('hidden').dequeue();
            })
        });
    });

    function initBox() {
        box1.removeClass("bg-green-400").addClass("bg-blue-400");
        // TODO: box1 に CSS設定
        // width = 100px
        // height = 100px
        box1.css({
            width: '100px',
            height: '100px',
        })

        box2.removeClass("bg-blue-400").addClass("bg-green-400");
        // TODO: box2 に CSS設定
        // width = 100px
        // height = 100px
        box2.css({
            width: '100px',
            height: '100px',
        })
    }

    initBox();
});