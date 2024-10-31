// Element
const stationMap = document.getElementById('station-map');
const currentName = document.getElementById('current-station');
const currentFurigana = document.getElementById('current-furigana');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');

// 駅名リストとふりがな
const stations = [
    { id: 1, name: '東京', furigana: 'とうきょう' },
    { id: 2, name: '有楽町', furigana: 'ゆうらくちょう' },
    { id: 3, name: '新橋', furigana: 'しんばし' },
    { id: 4, name: '浜松町', furigana: 'はままつちょう' },
    { id: 5, name: '田町', furigana: 'たまち' },
    { id: 6, name: '品川', furigana: 'しながわ' },
    { id: 7, name: '大崎', furigana: 'おおさき' },
    { id: 8, name: '五反田', furigana: 'ごたんだ' },
    { id: 9, name: '目黒', furigana: 'めぐろ' },
    { id: 10, name: '恵比寿', furigana: 'えびす' },
    { id: 11, name: '渋谷', furigana: 'しぶや' },
    { id: 12, name: '原宿', furigana: 'はらじゅく' },
    { id: 13, name: '代々木', furigana: 'よよぎ' },
    { id: 14, name: '新宿', furigana: 'しんじゅく' },
    { id: 15, name: '新大久保', furigana: 'しんおおくぼ' },
    { id: 16, name: '高田馬場', furigana: 'たかだのばば' },
    { id: 17, name: '目白', furigana: 'めじろ' },
    { id: 18, name: '池袋', furigana: 'いけぶくろ' },
    { id: 19, name: '大塚', furigana: 'おおつか' },
    { id: 20, name: '巣鴨', furigana: 'すがも' },
    { id: 21, name: '駒込', furigana: 'こまごめ' },
    { id: 22, name: '田端', furigana: 'たばた' },
    { id: 23, name: '西日暮里', furigana: 'にしにっぽり' },
    { id: 24, name: '日暮里', furigana: 'にっぽり' },
    { id: 25, name: '鶯谷', furigana: 'うぐいすだに' },
    { id: 26, name: '上野', furigana: 'うえの' },
    { id: 27, name: '御徒町', furigana: 'おかちまち' },
    { id: 28, name: '秋葉原', furigana: 'あきはばら' },
    { id: 29, name: '神田', furigana: 'かんだ' }
];

// インデックス（現在の駅）
var currentStationIndex = getStationIndexById(1);
// インデックス（次の駅）
var nextStationIndex = getNextStationIndex();
// インデックス（前の駅）
var prevStationIndex = getPrevStationIndex();

/**
 * updateStation(id)
 * 駅看板表示
 */
function updateStation() {
    // 現在の駅
    // TODO: 配列「stations」から、現在のインデックス「currentStationIndex」で、駅（連想配列）を取得
    var station = stations[currentStationIndex];

    // TODO: 駅名表示
    currentName.textContent = station.name;
    // TODO: 駅名（ふりがな）表示
    currentFurigana.textContent = station.furigana;

    // 次の駅のインデックス
    nextStationIndex = getNextStationIndex();
    // TODO: インデックスから駅名表示
    nextButton.textContent = stations[nextStationIndex].name;

    // 前の駅のインデックス
    prevStationIndex = getPrevStationIndex();
    // TODO: インデックスから駅名表示
    prevButton.textContent = stations[prevStationIndex].name;
}

/**
 * getStationIndexById(id)
 * IDで駅取得
 */
function getStationIndexById(id) {
    //  駅のID から インデックス取得
    return stations.findIndex(station => station.id === id);
}

/**
 * getNextStationIndex()
 * 次の駅のインデックス
 */
function getNextStationIndex() {
    return (currentStationIndex + 1) % stations.length;
}

/**
 * getPrevStationIndex()
 * 前の駅のインデックス
 */
function getPrevStationIndex() {
    return (currentStationIndex - 1 + stations.length) % stations.length;
}

/**
 * nextStation()
 * 次の駅に進む
 */
function nextStation() {
    currentStationIndex = getNextStationIndex();
    updateStation();
}

/**
 * prevStation()
 * 前の駅へ戻る
 */
function prevStation() {
    currentStationIndex = getPrevStationIndex();
    updateStation();
}

/**
 * onStationClick()
 * 駅をクリックして、駅の看板更新
 */
function onStationClick(id) {
    currentStationIndex = getStationIndexById(id)
    updateStation();
}

/**
 * displayStations()
 * 駅の一覧表示
 */
function displayStations() {
    // TODO: 駅名ボタン表示の繰り返し(for of)
    // ---- ここから ---
    for (const station of stations) {
        const stationElement = document.createElement('div');
        stationElement.className = `
            station text-sm w-full h-[40px] rounded-full 
            bg-green-500 text-white flex items-center justify-center 
            m-1 cursor-pointer
        `;
        // 駅名
        stationElement.textContent = station.name;
        // クリックしたとき
        stationElement.onclick = () => onStationClick(station.id);
    
        stationMap.appendChild(stationElement);
    }
    // ---- ここまで ---
}

// ページ読み込み時に初期化
window.onload = () => {
    // 駅一覧表示
    displayStations();
    // 駅の看板更新
    updateStation();
};