$(function () {
    // TODO: サムネイルクリック
    $('.thumbnail').on('click', function () {
        // TODO: img から 画像パス src を取得
        const src = $(this).attr('src')
        // TODO: メイン画像の img をフェードアウト
        // TODO: コールバックで、メイン画像の img にパスを設定してフェードイン
        $('#main-image').fadeOut(300, function () {
            $('#main-image').attr('src', src).fadeIn(300)
        })
    })
});

// $(function () {
//     // サムネイルクリック
//     $('.thumbnail').on('click', function () {
//         // 画像パス src を取得
//         const src = $(this).attr('src');
        
//         // メイン画像のフェードアウト -> src更新 -> フェードイン
//         $('#main-image')
//             .animate({ opacity: 0 }, 300)
//             .attr('src', src)
//             .animate({ opacity: 1 }, 300);
//     });
// });

// バニラJSの場合
// document.addEventListener("DOMContentLoaded", function () {
//     // サムネイルクリック
//     const thumbnails = document.querySelectorAll(".thumbnail");
//     const mainImage = document.getElementById("main-image");
//     thumbnails.forEach(thumbnail => {
//         thumbnail.addEventListener("click", function () {
//             // img から 画像パス src を取得
//             const src = thumbnail.getAttribute("src");
//             // メイン画像の img をフェードアウト
//             mainImage.style.transition = "opacity 0.3s";
//             mainImage.style.opacity = "0";
//             setTimeout(() => {
//                 // コールバックで、メイン画像の img にパスを設定してフェードイン
//                 mainImage.setAttribute("src", src);
//                 mainImage.style.opacity = "1";
//             }, 300); // フェードアウトに合わせてタイミング調整
//         });
//     });
// });