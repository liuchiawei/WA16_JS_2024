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

const imageWidth = 200;

/**
 * createCarousel()
 * カルーセル画像を初期化
 */
function createCarousel() {
    const scrollItems = items.concat(items); // アイテムを複製
    scrollItems.forEach(item => {
        var img = document.createElement("img");
        img.src = item.image;
        img.classList.add("carousel-image");
        img.onclick = () => openModal(item.id);
        carouselImages.appendChild(img);
    });

    // 初期位置をアイテムリストの中央に設定
    carouselImages.style.transform = `translateX(${-items.length * imageWidth}px)`;
    currentIndex = items.length; // 中央スタート
}

/**
 * updateCarousel()
 * カルーセルのアニメーションスライド処理
 */
function updateCarousel() {
    // TODO: オフセット計算(%): インデックス x 100
    // 0, -100, -200, ....
    const offset = -currentIndex * imageWidth

    // TODO: 左にずらす（%): style.transform に translateX() 設定
    carouselImages.style.transform = `translateX(${offset}px)`

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
    // direction でインデックス計算
    currentIndex =
        (currentIndex + direction + items.length) % items.length;

    // カルーセル処理
    updateCarousel();
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
        };
        thumbnailContainer.appendChild(thumb);
    });
}

/**
 * next()
 * 次のカルーセル
 */
function next() {
    moveSlide(1)
}

/**
 * prev()
 * 前のカルーセル
 */
function prev() {
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
 * 初期設定
 */
// カルーセル作成
createCarousel();
// サムネイルの作成
createThumbnails();