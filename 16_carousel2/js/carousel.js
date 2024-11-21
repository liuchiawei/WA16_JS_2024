// カルーセルの表示場所
const carouselImages = document.getElementById("carousel-images");
// サムネイルの表示場所
const thumbnailContainer = document.getElementById("thumbnail-container");
// 自動スライド変数
var autoSlide;
// スライドショーのインターバル
const slideShowInterval = 5000;
// 画像インデックス
var currentIndex = 0;
// アニメーション中フラグ
var isTransitioning = false;

/**
 * createCarousel()
 * カルーセル画像を初期化
 */
function createCarousel() {
    // forEach で、サムネル画像作成
    items.forEach(item => {
        // --- 繰り返し（ここから）---
        // TODO: imgタグ作成

        // TODO: 画像パス設定: item.image

        // TODO: class=carousel-image 追加

        // TODO: クリックでモーダルウィンドウ開く

        // TODO: 親要素に imgタグ追加
        // --- 繰り返し（ここまで）---
    });
}

/**
 * updateCarousel()
 * カルーセルのアニメーションスライド処理
 */
function updateCarousel() {
    // TODO: オフセット計算(%): インデックス x 100

    // TODO: 左にずらす（%): style.transform に translateX() 設定

    // TODO: アニメーションイージング: style.transition に　transform 設定
    carouselImages.style.transition = "transform 1.0s ease";

    // サムネイルハイライト
    updateThumbnails();
}

/**
 * moveSlide
 * 方向に応じてスライド
 * 左: 1
 * 右: -1
 */
function moveSlide(direction) {
    if (isTransitioning) return;
    isTransitioning = true;

    // direction でインデックス計算
    currentIndex = (currentIndex + direction + items.length) % items.length;

    // カルーセル処理
    updateCarousel();

    // アニメーション時間のラグ
    setTimeout(() => {
        isTransitioning = false;
    }, 500);
}

/**
 * createThumbnails()
 * サムネイル画像を作成し、クリックでカルーセルが移動
 */
function createThumbnails() {
    items.forEach((item, index) => {
        // サムネイル画像作成
        const thumb = document.createElement("img");
        thumb.src = item.image;
        thumb.classList.add("thumbnail-image");
        // サムネイルクリックで、カルーセル移動
        thumb.onclick = () => {
            // 現在のインデックス設定
            currentIndex = index;
            updateCarousel();
            stopSlide();
            startSlide();
        };
        thumbnailContainer.appendChild(thumb);
    });
}

/**
 * next()
 * 次のカルーセル
 */
function next() {
    stopSlide()
    startSlide()
    moveSlide(-1)
}

/**
 * prev()
 * 前のカルーセル
 */
function prev() {
    stopSlide()
    startSlide()
    moveSlide(1)
}

/**
 * updateThumbnails()
 * サムネイルハイライト
 */
function updateThumbnails() {
    // TODO: class=thumbnail-image をすべて取得
    const thumbnails = [];

    // サムネイル繰り返し
    thumbnails.forEach((thumb, index) => {
        if (index === currentIndex) {
            // TODO: 現在のインデックスで、class=active-thumbnail 追加: add()
        } else {
            // TODO: それ以外のインデックスで、class=active-thumbnail 削除: remove()
        }
    });
}

/**
 * startSlide()
 * スライドショー開始
 */
function startSlide() {
    // サムネイルハイライト
    updateThumbnails();
    // スライド開始
    autoSlide = setInterval(() => moveSlide(1), slideShowInterval);
}

/**
 * stopSlide()
 * スライドショー開始
 */
function stopSlide() {
    clearInterval(autoSlide)
}

/**
 * 初期設定
 */
// カルーセル作成
createCarousel();
// サムネイルの作成
createThumbnails();
// スライドショー開始
startSlide();