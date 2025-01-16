// APIベースURL
const baseUrl = `${location.origin}${location.pathname.replace(/\/?[^\/]+\.(html|php)$/, '')}`;
// JSONデータを取得するAPIのURL
const API_BASE_URI = `${baseUrl}/api/`;
// APIサーバの場合、実際のAPIエンドポイントに置き換える
// const API_BASE_URI = "http://localhost/your_project/api/";

// fetch APIで外部JSONファイルを読み込む
async function fetchTweets() {
    const jsonUrl = API_BASE_URI + "tweets.json";
    try {
        // JSONファイルを取得
        const response = await fetch(jsonUrl);

        // ステータスチェック
        if (!response.ok) {
            displayErrorMessage("データの取得に失敗しました。");
        }

        // JSONデータを取得
        const data = await response.json();

        // ツイートを表示
        displayTweets(data.tweets);
    } catch (error) {
        displayErrorMessage(error);
    }
}

// ツイート一覧を表示する関数
function displayTweets(tweets) {
    if (!tweets) return;

    const tweetList = document.getElementById("tweet-list");
    // コンテナを初期化
    tweetList.innerHTML = "";

    tweets.forEach(tweet => {
        const tweetElement = document.createElement("div");
        tweetElement.classList.add("tweet", "d-flex", "mb-3");

        tweetElement.innerHTML = `
    <div class="profile-image me-3">
      <img src="${tweet.user.profile_image_url}" alt="プロフィール画像" class="rounded-circle" style="width: 50px; height: 50px;">
    </div>
    <div class="tweet-body">
      <div class="tweet-user">
        <span class="fw-bold">@${tweet.user.name}</span>
        <span class="ms-1 text-secondary">${tweet.created_at}</span>
      </div>
      <div class="tweet-text mt-2 mb-2">
        ${formatContent(tweet.content)}
        ${renderMedias(tweet.media)}
      </div>
      <nav class="tweet-nav mt-3 mb-3">
        <ul class="d-flex">
          <li class="me-3">
            <a href="#"><img src="svg/bubble.svg" alt="コメント"></a>
          </li>
          <li class="me-3">
            <a href="#"><img src="svg/heart.svg" alt="いいね"></a>
          </li>
          <li class="me-3">
            <a href="#"><img src="svg/loop.svg" alt="リツイート"></a>
          </li>
          <li>
            <a href="#"><img src="svg/trash.svg" alt="削除"></a>
          </li>
        </ul>
      </nav>
    </div>
  `;
        tweetList.appendChild(tweetElement);
    });
}

function renderMedias(media) {
    var html = "";
    if (media && media.length > 0) {
        html = media.map(mediaItem => {
            if (mediaItem.type === "image") {
                return `<img src="${mediaItem.url}" alt="" class="img-fluid rounded mt-2">`;
            }
            return "";
        }).join(""); // 複数の画像を表示する場合にも対応
    }
    return html;
}

function formatContent(content) {
    content = returnContent(content);
    content = hashTagContent(content);
    return content;
}

function returnContent(content) {
    const formatted = content.replace(/\n/g, '<br>'); // 改行を <br> に変換
    return formatted;
}

function hashTagContent(content) {
    const formatted = content.replace(/(^|<br>|\s)#([^\s#<]+)/g, '$1<a href="?tag=$2" class="text-primary">#$2</a>'); // ハッシュタグをリンク化
    return formatted;
}

// エラーメッセージを表示する関数
function displayErrorMessage(message) {
    const tweetList = document.getElementById("tweet-list");
    tweetList.innerHTML = `
    <div class="alert alert-danger">
      ${message}
    </div>
  `;
}

// ページ読み込み時にデータを取得
document.addEventListener("DOMContentLoaded", fetchTweets);
