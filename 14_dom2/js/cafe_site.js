// キャッチコピーの文字
var message = "心ほどける、甘くて香ばしいブレイクタイム";
// 背景画像の配列
const images = [
    'images/cafe-shop-1.jpg',
    'images/cafe-shop-2.jpg',
    'images/cafe-shop-3.jpg',
];
// 画像の指定インデックス
var imageIndex = 0;
// アニメーションテキストのディレイ時間
const animationTextDelay = 200;
// 背景画像のフェードイン時間
const fadeInTime = 1000;
// 背景画像の切り替え時間
const backgroundSwitchTime = 8000;

// キャッチコピーのElement
const copyElement = document.getElementById('copy');
// 背景画像のElement
const backgroundImage = document.getElementById('background-image');

/**
 * animationText()
 * アニメーションテキスト
 */
function animationText(text, callback) {
    // 現在、何文字目かのインデックス
    var index = 0;
    function displayNextChar() {
        // TODO: spanタグ作成
        // TODO: spanタグに、index番目の文字を設定
        // TODO: class=fade-in を設定
        // TODO: copyElement に spanタグを追加

        // 文字インデックスを増やす
        index++;
        if (index < text.length) {
            // 現在の文字インデックスが、文字数より小さければ、アニメーションテキスト継続
            setTimeout(displayNextChar, animationTextDelay);
        } else {
            // 初回背景画像表示
            switchBackground();
            // 背景画像スライドショー
            setInterval(switchBackground, backgroundSwitchTime);
        }
    }
    displayNextChar();
}

/**
 * switchBackground()
 * 背景画像のスライドショー
 */
function switchBackground() {
    // 背景画像のインデックス更新
    imageIndex = (imageIndex + 1) % images.length;

    // TODO: Imageオブジェクト作成
    var image;
    // TODO: Imageオブジェクトに配列の画像設定

    // 画像がロードされたら実行
    image.onload = () => {
        // TODO: backgroundImage のフェードアウト(のスタイルの opacity = 0)

        // フェードインで画像表示
        setTimeout(() => {
            // TODO: backgroundImage(imgタグ) に画像設定

            // TODO: フェードアウト(スタイルの opacity = 1)
        }, fadeInTime);
    };
}

// テキストアニメーションを開始
animationText(message);