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
    // forEach で、カルーセル画像作成
    items.forEach(item => {
        // --- 繰り返し（ここから）---
        // TODO: imgタグ作成
        var img = document.createElement("img")

        // TODO: 画像パス設定: item.image
        img.src = item.image

        // TODO: class=carousel-image 追加
        img.classList.add("carousel-image")

        // TODO: クリックでモーダルウィンドウ開く
        img.onclick = () => openModal(item.id)

        // TODO: 親要素(carouselImages)に imgタグ追加
        carouselImages.appendChild(img)
        // --- 繰り返し（ここまで）---
    });
}

/**
 * updateCarousel()
 * カルーセルのアニメーションスライド処理
 */
function updateCarousel() {
    // TODO: オフセット計算(%): インデックス x 100
    // 0, -100, -200, ....
    const offset = -currentIndex * 100

    // TODO: 左にずらす（%): style.transform に translateX() 設定
    carouselImages.style.transform = `translateX(${offset}%)`

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
    currentIndex =
        (currentIndex + direction + items.length) % items.length;
    // 現在: currentIndex = 0
    // 画像の個数: 5 (items.length)

    // 右：direction = 1
    // currentIndex = (0 + 1 + 5) / 5 のあまり = 1
    // 左：direction = -1
    // currentIndex = (0 - 1 + 5) / 5 のあまり = 4

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
    // 1: 右にスライド
    moveSlide(1)
}

/**
 * prev()
 * 前のカルーセル
 */
function prev() {
    stopSlide()
    startSlide()
    // -1: 左にスライド
    moveSlide(-1)
}

/**
 * updateThumbnails()
 * サムネイルハイライト
 */
function updateThumbnails() {
    // TODO: class=thumbnail-image をすべて取得
    // セレクタ: .thumbnail-image 
    const thumbnails =
        document.querySelectorAll(".thumbnail-image")
    // コンソール表示
    console.log(thumbnails)
    // document.getElementsByClassName()
    // jQyery: $(".thumbnail-image")

    // サムネイル繰り返し
    thumbnails.forEach((thumb, index) => {
        if (index === currentIndex) {
            // TODO: 現在のインデックスで、class=active-thumbnail 追加: add()
            thumb.classList.add("active-thumbnail")
        } else {
            // TODO: それ以外のインデックスで、class=active-thumbnail 削除: remove()
            thumb.classList.remove("active-thumbnail")
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