// バニラJSで、DOM読み込み後にアラート表示
document.addEventListener("DOMContentLoaded", function () {
    alert("バニラJS")
})

// TODO: jQueryで、DOM読み込み後にアラート表示
// jQuery Code Snippets の機能で「jqdoc」で入力
$(function () {
    alert('Hello, jQuery!');
});

$(() => {
    alert('Hello, jQuery(Arrow)!');
});

// TODO:DOM読み込み前の処理
alert('はじまります');