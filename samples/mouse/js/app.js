// 商品画像リスト
const items = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
];

// 初期設定
const mainImage = document.getElementById("main-image");
const thumbnailsContainer = document.getElementById("thumbnails");

// 初期メイン画像を設定
mainImage.src = items[0];

// サムネイルを動的に生成
items.forEach((item) => {
    const thumbnail = document.createElement("img");
    thumbnail.src = item;
    thumbnail.className =
        "w-16 h-16 object-cover rounded-md cursor-pointer transition-transform transform hover:scale-110";

    // マウスオーバーでメイン画像を更新
    thumbnail.onmouseover = () => {
        mainImage.src = item;
    }

    // サムネイルをコンテナに追加
    thumbnailsContainer.appendChild(thumbnail);
});