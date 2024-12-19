// TODO: id=nav のY座標取得: offset().top
const navPos = $('#nav').offset().top
$(window).scroll(function () {
    // console.log($(window).scrollTop())
    if ($(window).scrollTop() > navPos) {
        // TODO: 固定 css設定：position: fixed
        $('#nav').css({
            position: 'fixed',
        });
    } else {
        // TODO: 固定解除 css設定：position: static
        $('#nav').css({
            position: 'static',
        });
    }
});