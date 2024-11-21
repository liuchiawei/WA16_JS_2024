// お知らせバーの表示場所
const announcementBar = document.getElementById("announcement-bar");

// お知らせインデックス
var announcementIndex = 0;

// お知らせのインターバル
const announcementInterval = 5000;

/**
 * updateAnnouncement()
 * お知らせメッセージを切り替え、フェードイン・フェードアウトアニメーションを適用
 */
function updateAnnouncement() {
    // フェードアウト
    announcementBar.classList.add("fade-out");

    // 0.5秒後に内容を変更してフェードイン
    setTimeout(() => {
        // 新しいお知らせを設定
        announcementBar.innerHTML = announcements[announcementIndex];

        // 次のお知らせインデックス
        announcementIndex = (announcementIndex + 1) % announcements.length;

        // フェードイン
        announcementBar.classList.remove("fade-out");
        announcementBar.classList.add("fade-in");
    }, 500);

    // フェードイン終了処理
    setTimeout(() => {
        announcementBar.classList.remove("fade-in");
    }, 1000);
}

// お知らせ初期表示
updateAnnouncement();

// 一定時間ごとにお知らせを更新
setInterval(updateAnnouncement, announcementInterval);