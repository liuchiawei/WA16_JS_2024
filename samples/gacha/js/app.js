const rarities = [
    { type: 'N', name: 'ピクシー', image: './images/pixy.png', probability: 60 },
    { type: 'R', name: 'ドラゴン', image: './images/dragon.png', probability: 39 },
    { type: 'SR', name: 'グリムリーパー', image: './images/grim.png', probability: 8 },
    { type: 'SSR', name: 'ビーナス', image: './images/venus.png', probability: 2 }
];

const noneImage = './images/none.png';

var totalCount = 0;
var counts = { N: 0, R: 0, SR: 0, SSR: 0 };
const interval = 1000;

// Element
var cardImage = document.getElementById('card-image');
cardImage.src = noneImage;

var loadingModal = document.getElementById('loading-modal');

/**
 * ランダムレアリティ
 */
const getRandomRarity = () => {
    // 確率合計値
    var totalProbability = rarities.reduce((sum, item) => sum + item.probability, 0);

    // ランダムな数字
    var randomValue = Math.random() * totalProbability;

    // 確率累積値
    var accumulatedProbability = 0;

    // カード種類で繰り返し
    for (var rarity of rarities) {
        accumulatedProbability += rarity.probability;
        // ランダムな数字が、確率累積値より小さければレアリティ決定
        if (randomValue <= accumulatedProbability) {
            return rarity;
        }
    }
};

/**
 * カードを引く
 */
const play = () => {
    // モーダルローディング開始
    loadingModal.classList.remove('hidden');

    // カード非表示
    cardImage.classList.remove('revealed');

    // レアリティ決定
    var card = getRandomRarity();

    // カード表示
    showCard(card);
};

/**
 * カードの切り替え処理
 */
const showCard = (card) => {
    cardImage.src = noneImage;
    cardImage.classList.add('is-active');

    setTimeout(() => {
        cardImage.src = card.image;
        // モーダル非表示
        loadingModal.classList.add('hidden');
        cardImage.src = card.image;
        cardImage.classList.remove('is-active');

        // カウント更新
        totalCount++;
        counts[card.type]++;
        document.getElementById(`count-${card.type}`).innerHTML = counts[card.type];

        // 集計
        showTotaling();
    }, interval);
}

/**
 * 集計
 */
const showTotaling = () => {
    for (const key in counts) {
        // console.log(key, counts[key])
        var per = (counts[key] / totalCount) * 100;
        per = per.toFixed();
        document.getElementById(`per-${key}`).innerHTML = per;
    }
}
