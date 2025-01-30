const carouselImages = document.getElementById("carousel-images");
const thumbnailContainer = document.getElementById("thumbnail-container");
let imageWidth = 0; // 各画像の幅を動的に取得するための変数
let currentIndex = items.length; // 初期インデックスは中央スタート
let isTransitioning = false;

/**
 * createCarousel()
 * 無限スクロールのために画像リストを複製して初期化
 */
function createCarousel() {
    const scrollItems = items.concat(items).concat(items); // アイテムを3倍に複製
    scrollItems.forEach((item) => {
        const div = document.createElement("div");
        div.classList.add("carousel-image");

        const img = document.createElement("img");
        img.src = item.image;
        img.onclick = () => openModal(item.id);

        div.appendChild(img)
        carouselImages.appendChild(div);
    });

    // 初期位置を中央のアイテムリストに設定
    setTimeout(() => {
        // `.carousel-image` の幅を取得
        const firstImage = document.querySelector(".carousel-image");
        if (firstImage) {
            imageWidth = firstImage.offsetWidth; // 幅を取得
            carouselImages.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
        }
    }, 0); // DOM が更新された後に幅を取得するために遅延を設定
}

/**
 * updateCarousel()
 * カルーセルのスライド処理を更新
 */
function updateCarousel() {
    const offset = -currentIndex * imageWidth;
    carouselImages.style.transform = `translateX(${offset}px)`;
    carouselImages.style.transition = "transform 0.5s ease";

    // トランジション終了後の処理
    setTimeout(() => {
        // 無限スクロール処理
        if (currentIndex <= 0) {
            // 最後の画像に移動したら中央リストの同じ画像に戻す
            currentIndex = items.length;
            carouselImages.style.transition = "none"; // トランジションを無効化
            carouselImages.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
        } else if (currentIndex >= items.length * 2) {
            // 最初の画像に移動したら中央リストの同じ画像に戻す
            currentIndex = items.length;
            carouselImages.style.transition = "none"; // トランジションを無効化
            carouselImages.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
        }

        // トランジションを再び有効化
        setTimeout(() => {
            carouselImages.style.transition = "transform 0.5s ease";
            isTransitioning = false;
        }, 50);
    }, 500); // トランジション時間に合わせる
}

/**
 * moveSlide(direction)
 * 指定された方向にスライド
 */
function moveSlide(direction) {
    if (isTransitioning) return; // トランジション中は操作を無効化
    isTransitioning = true;

    currentIndex += direction;
    updateCarousel();
}

/**
 * createThumbnails()
 * サムネイルを作成し、クリックでカルーセルを移動
 */
function createThumbnails() {
    items.forEach((item, index) => {
        const thumb = document.createElement("img");
        thumb.src = item.image;
        thumb.classList.add("thumbnail-image");
        thumb.onclick = () => {
            currentIndex = index + items.length; // 中央リストの該当画像に移動
            updateCarousel();
        };
        thumbnailContainer.appendChild(thumb);
    });
}

/**
 * updateThumbnails()
 * 現在のスライドに対応するサムネイルをハイライト
 */
function updateThumbnails() {
    const thumbnails = document.querySelectorAll(".thumbnail-image");
    thumbnails.forEach((thumb, index) => {
        if (index === (currentIndex % items.length)) {
            thumb.classList.add("active-thumbnail");
        } else {
            thumb.classList.remove("active-thumbnail");
        }
    });
}

/**
 * next()
 * 次のスライド
 */
function next() {
    moveSlide(1);
}

/**
 * prev()
 * 前のスライド
 */
function prev() {
    moveSlide(-1);
}

/**
 * 初期化処理
 */
createCarousel();
createThumbnails();