// Element
const stationMap = document.getElementById('station-map');
const currentName = document.getElementById('current-station');
const currentFurigana = document.getElementById('current-furigana');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');
const lineSelect = document.getElementById("line-select"); // プルダウンの要素を取得

// 路線データ
var trainLines = {};

// 駅一覧データ
var stations = [];
var trainColor = "bg-green-500";

// 現在の駅と路線インデックス
var currentLineIndex = 0;
var currentStationIndex = 0;
var nextStationIndex = 0;
var prevStationIndex = 0;

/**
 * loadTrainLines()
 * JSONファイルから路線データを取得
 */
async function loadTrainLines() {
    try {
        // HTTP経由で api/trainLines.json を取得
        const response = await fetch('api/trainLines.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // JSONを JSオブジェクトに変換
        trainLines = await response.json();
    } catch (error) {
        alert("駅情報を取得できませんでした");
    }
}

/**
 * selectLine()
 * 路線選択処理
 */
function selectLine() {
    if (lineSelect.value === "") {
        clearStations();
        return;
    }

    stations = trainLines[lineSelect.value].stations;
    trainColor = trainLines[lineSelect.value].color;

    currentStationIndex = getStationIndexById(1);
    nextStationIndex = getNextStationIndex();
    prevStationIndex = getPrevStationIndex();
    updateStation();
    displayStations();
}

/**
 * updateStation()
 * 駅看板表示
 */
function updateStation() {
    const station = stations[currentStationIndex];

    currentName.innerHTML = station.name;
    currentFurigana.innerHTML = station.furigana;

    nextStationIndex = getNextStationIndex();
    nextButton.innerHTML = stations[nextStationIndex].name;

    prevStationIndex = getPrevStationIndex();
    prevButton.innerHTML = stations[prevStationIndex].name;
}

/**
 * getStationIndexById()
 * IDで駅インデックスを取得
 */
function getStationIndexById(id) {
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
 * 前の駅に戻る
 */
function prevStation() {
    currentStationIndex = getPrevStationIndex();
    updateStation();
}

/**
 * onStationClick()
 * 駅をクリックして駅の看板を更新
 */
function onStationClick(id) {
    currentStationIndex = getStationIndexById(id);
    updateStation();
}

/**
 * displayStations()
 * 駅一覧表示
 */
function displayStations() {
    clearStations();

    for (const station of stations) {
        const stationElement = document.createElement('div');
        stationElement.className = `
            station text-sm w-full h-[40px] rounded-full 
            text-white flex items-center justify-center 
            m-1 cursor-pointer
        `;
        stationElement.classList.add(trainColor);

        stationElement.textContent = station.name;
        stationElement.onclick = () => onStationClick(station.id);

        stationMap.appendChild(stationElement);
    }
}

/**
 * clearStations()
 * 駅一覧をクリア
 */
function clearStations() {
    stationMap.innerHTML = "";
}

// ページ読み込み時に路線データをロード
window.onload = async function() {
    await loadTrainLines();
    selectLine();
};

function nextLine() {
    if (lineSelect.selectedIndex > 0) {
        lineSelect.selectedIndex -= 1;
        selectLine();
    }
}

function prevLine() {
    if (lineSelect.selectedIndex < lineSelect.options.length - 1) {
        lineSelect.selectedIndex += 1;
        selectLine();
    }
}

// イベント登録：キーボード操作での駅移動と路線切り替え
document.onkeydown = (e) => {
    if (e.key === 'ArrowRight') {
        nextStation();
    } else if (e.key === 'ArrowLeft') {
        prevStation();
    } else if (e.key === 'ArrowUp') {
        nextLine();
    } else if (e.key === 'ArrowDown') {
        prevLine();
    }
};

