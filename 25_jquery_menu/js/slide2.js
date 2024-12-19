$(function () {
    const $menuButton = $('#menu-button');
    const $menuLink = $('#slide-menu a[href^="#"]');
    const $slideMenu = $('#slide-menu');
    const headerHeight = $('#header-menu').outerHeight(); // ヘッダーの高さを取得

    // 初期化処理
    function initMenu() {
        $slideMenu.css({
            position: 'fixed', // 固定位置
            top: headerHeight + 'px', // ヘッダーの下に配置
            left: '-100%',    // 初期状態は画面外に隠す
            height: `calc(100vh - ${headerHeight}px)` // ヘッダー分の高さを差し引く
        });
    }

    // スライド処理
    function slideMenu() {
        let x = '0px';
        $slideMenu.toggleClass('on');
        if (!$slideMenu.hasClass('on')) {
            x = '-' + $slideMenu.width() + 'px';
        }
        $slideMenu.animate({ left: x }, 300);
    }

    // クリックイベント
    $menuButton.on('click', function () {
        slideMenu();
    });

    // スムーススクロール
    $menuLink.on('click', function (e) {
        e.preventDefault();
        slideMenu();
        const target = $(this.getAttribute('href'));
        if (target.length) {
            const targetOffset = target.offset().top - headerHeight;
            $('html, body').stop().animate({
                scrollTop: targetOffset
            }, 500);
        }
    });

    initMenu();
});
