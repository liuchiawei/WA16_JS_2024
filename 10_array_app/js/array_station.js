// Element
const stationMap = document.getElementById("station-map");
const currentName = document.getElementById("current-station");
const currentFurigana = document.getElementById("current-furigana");
const currentStationCode = document.getElementById("current-station-code");
const stationButtonContainer = document.getElementById(
  "station-button-container"
);
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");
const stationMapContainer = document.getElementById("station-map-container");
const lineMapContainer = document.getElementById("line-map-container");
const lineMap = document.getElementById("line-map");

let currentStation;
let availableLines;

// TODO: load stations from json
// 駅名リストとふりがな
const yamanoteLineStations = [
  { id: 1, name: "東京", furigana: "とうきょう", order: 1 },
  { id: 2, name: "有楽町", furigana: "ゆうらくちょう", order: 2 },
  { id: 3, name: "新橋", furigana: "しんばし", order: 3 },
  { id: 4, name: "浜松町", furigana: "はままつちょう", order: 4 },
  { id: 5, name: "田町", furigana: "たまち", order: 5 },
  { id: 6, name: "品川", furigana: "しながわ", order: 6 },
  { id: 7, name: "大崎", furigana: "おおさき", order: 7 },
  { id: 8, name: "五反田", furigana: "ごたんだ", order: 8 },
  { id: 9, name: "目黒", furigana: "めぐろ", order: 9 },
  { id: 10, name: "恵比寿", furigana: "えびす", order: 10 },
  { id: 11, name: "渋谷", furigana: "しぶや", order: 11 },
  { id: 12, name: "原宿", furigana: "はらじゅく", order: 12 },
  { id: 13, name: "代々木", furigana: "よよぎ", order: 13 },
  { id: 14, name: "新宿", furigana: "しんじゅく", order: 14 },
  { id: 15, name: "新大久保", furigana: "しんおおくぼ", order: 15 },
  { id: 16, name: "高田馬場", furigana: "たかだのばば", order: 16 },
  { id: 17, name: "目白", furigana: "めじろ", order: 17 },
  { id: 18, name: "池袋", furigana: "いけぶくろ", order: 18 },
  { id: 19, name: "大塚", furigana: "おおつか", order: 19 },
  { id: 20, name: "巣鴨", furigana: "すがも", order: 20 },
  { id: 21, name: "駒込", furigana: "こまごめ", order: 21 },
  { id: 22, name: "田端", furigana: "たばた", order: 22 },
  { id: 23, name: "西日暮里", furigana: "にしにっぽり", order: 23 },
  { id: 24, name: "日暮里", furigana: "にっぽり", order: 24 },
  { id: 25, name: "鶯谷", furigana: "うぐいすだに", order: 25 },
  { id: 26, name: "上野", furigana: "うえの", order: 26 },
  { id: 27, name: "御徒町", furigana: "おかちまち", order: 27 },
  { id: 28, name: "秋葉原", furigana: "あきはばら", order: 28 },
  { id: 29, name: "神田", furigana: "かんだ", order: 29 },
];
const centralLineStations = [
  { id: 1, name: "東京", furigana: "とうきょう", order: 1 },
  { id: 29, name: "神田", furigana: "かんだ", order: 2 },
  { id: 32, name: "御茶ノ水", furigana: "おちゃのみず", order: 3 },
  { id: 33, name: "四ツ谷", furigana: "よつや", order: 4 },
  { id: 14, name: "新宿", furigana: "しんじゅく", order: 5 },
  { id: 35, name: "中野", furigana: "なかの", order: 6 },
  { id: 36, name: "高円寺", furigana: "こうえんじ", order: 7 },
  { id: 37, name: "阿佐ヶ谷", furigana: "あさがや", order: 8 },
  { id: 38, name: "荻窪", furigana: "おぎくぼ", order: 9 },
  { id: 39, name: "西荻窪", furigana: "にしおぎくぼ", order: 10 },
  { id: 40, name: "吉祥寺", furigana: "きちじょうじ", order: 11 },
  { id: 41, name: "三鷹", furigana: "みたか", order: 12 },
  { id: 42, name: "武蔵境", furigana: "むさしさかい", order: 13 },
  { id: 43, name: "東小金井", furigana: "ひがしこがねい", order: 14 },
  { id: 44, name: "武蔵小金井", furigana: "むさしこがねい", order: 15 },
  { id: 45, name: "国分寺", furigana: "こくぶんじ", order: 16 },
  { id: 46, name: "西国分寺", furigana: "にしこくぶんじ", order: 17 },
  { id: 47, name: "立川", furigana: "たちかわ", order: 18 },
];
const keihinTohokuLineStations = [
  { id: 1, name: "東京", furigana: "とうきょう", order: 1 },
  { id: 2, name: "有楽町", furigana: "ゆうらくちょう", order: 2 },
  { id: 3, name: "新橋", furigana: "しんばし", order: 3 },
  { id: 4, name: "浜松町", furigana: "はままつちょう", order: 4 },
  { id: 5, name: "田町", furigana: "たまち", order: 5 },
  { id: 6, name: "品川", furigana: "しながわ", order: 6 },
  { id: 48, name: "大井町", furigana: "おおいまち", order: 7 },
  { id: 49, name: "大森", furigana: "おおもり", order: 8 },
  { id: 50, name: "蒲田", furigana: "かまた", order: 9 },
  { id: 51, name: "川崎", furigana: "かわさき", order: 10 },
  { id: 52, name: "鶴見", furigana: "つるみ", order: 11 },
  { id: 53, name: "新子安", furigana: "しんこやす", order: 12 },
  { id: 54, name: "東神奈川", furigana: "ひがしかながわ", order: 13 },
  { id: 55, name: "横浜", furigana: "よこはま", order: 14 },
];
const saikyoLineStations = [
  { id: 1, name: "東京", furigana: "とうきょう", order: 1 },
];
const allStations = [
  { id: 1, name: "東京", codes: ["JY", "JC", "JK"] },
  { id: 2, name: "有楽町", codes: ["JY", "JK"] },
  { id: 3, name: "新橋", codes: ["JY", "JK"] },
  { id: 4, name: "浜松町", codes: ["JY", "JK"] },
  { id: 5, name: "田町", codes: ["JY", "JK"] },
  { id: 6, name: "品川", codes: ["JY", "JK"] },
  { id: 7, name: "大崎", codes: ["JY"] },
  { id: 8, name: "五反田", codes: ["JY"] },
  { id: 9, name: "目黒", codes: ["JY"] },
  { id: 10, name: "恵比寿", codes: ["JY"] },
  { id: 11, name: "渋谷", codes: ["JY"] },
  { id: 12, name: "原宿", codes: ["JY"] },
  { id: 13, name: "代々木", codes: ["JY"] },
  { id: 14, name: "新宿", codes: ["JY", "JC"] },
  { id: 15, name: "新大久保", codes: ["JY"] },
  { id: 16, name: "高田馬場", codes: ["JY"] },
  { id: 17, name: "目白", codes: ["JY"] },
  { id: 18, name: "池袋", codes: ["JY"] },
  { id: 19, name: "大塚", codes: ["JY"] },
  { id: 20, name: "巣鴨", codes: ["JY"] },
  { id: 21, name: "駒込", codes: ["JY"] },
  { id: 22, name: "田端", codes: ["JY"] },
  { id: 23, name: "西日暮里", codes: ["JY"] },
  { id: 24, name: "日暮里", codes: ["JY"] },
  { id: 25, name: "鶯谷", codes: ["JY"] },
  { id: 26, name: "上野", codes: ["JY"] },
  { id: 27, name: "御徒町", codes: ["JY"] },
  { id: 28, name: "秋葉原", codes: ["JY"] },
  { id: 29, name: "神田", codes: ["JY", "JC"] },
  { id: 32, name: "御茶ノ水", codes: ["JC"] },
  { id: 33, name: "四ツ谷", codes: ["JC"] },
  { id: 35, name: "中野", codes: ["JC"] },
  { id: 36, name: "高円寺", codes: ["JC"] },
  { id: 37, name: "阿佐ヶ谷", codes: ["JC"] },
  { id: 38, name: "荻窪", codes: ["JC"] },
  { id: 39, name: "西荻窪", codes: ["JC"] },
  { id: 40, name: "吉祥寺", codes: ["JC"] },
  { id: 41, name: "三鷹", codes: ["JC"] },
  { id: 42, name: "武蔵境", codes: ["JC"] },
  { id: 43, name: "東小金井", codes: ["JC"] },
  { id: 44, name: "武蔵小金井", codes: ["JC"] },
  { id: 45, name: "国分寺", codes: ["JC"] },
  { id: 46, name: "西国分寺", codes: ["JC"] },
  { id: 47, name: "立川", codes: ["JC"] },
  { id: 48, name: "大井町", codes: ["JK"] },
  { id: 49, name: "大森", codes: ["JK"] },
  { id: 50, name: "蒲田", codes: ["JK"] },
  { id: 51, name: "川崎", codes: ["JK"] },
  { id: 52, name: "鶴見", codes: ["JK"] },
  { id: 53, name: "新子安", codes: ["JK"] },
  { id: 54, name: "東神奈川", codes: ["JK"] },
  { id: 55, name: "横浜", codes: ["JK"] },
];
const lines = [
  {
    id: 1,
    name: "山手線",
    code: "JY",
    color: "green",
    stations: yamanoteLineStations,
  },
  {
    id: 2,
    name: "中央線快速",
    code: "JC",
    color: "orange",
    stations: centralLineStations,
  },
  {
    id: 3,
    name: "京浜東北線",
    code: "JK",
    color: "sky",
    stations: keihinTohokuLineStations,
  },
];

let stations = lines[0].stations;

// インデックス（現在の駅）
var currentStationIndex = getStationIndexById(1);
// インデックス（次の駅）
var nextStationIndex = getNextStationIndex();
// インデックス（前の駅）
var prevStationIndex = getPrevStationIndex();

// インデックス（現在の線路）
var currentLineIndex = getLineIndexById(1);
// インデックス（次の線路）
var nextLineIndex = getNextLineIndex();
// インデックス（前の線路）
var prevLineIndex = getPrevLineIndex();

/**
 * updateStation(id)
 * 駅看板表示
 */
function updateStation() {
  currentStation = allStations.find(
    (station) => station.id === stations[currentStationIndex].id
  );
  // 現在の駅
  var station = lines[currentLineIndex].stations[currentStationIndex];

  console.log("station", station);

  currentName.textContent = station.name;
  currentFurigana.textContent = station.furigana;
  currentStationCode.textContent = `${lines[currentLineIndex].code}-${station.order}`;
  stationButtonContainer.className = `w-full flex justify-center space-x-24 bg-${lines[currentLineIndex].color}-500`;

  // 次の駅のインデックス
  nextStationIndex = getNextStationIndex();
  nextButton.textContent = stations[nextStationIndex].name;
  nextButton.className = `font-extrabold w-full text-white px-4 py-2 transition duration-300 hover:bg-${lines[currentLineIndex].color}-700`;

  // 前の駅のインデックス
  prevStationIndex = getPrevStationIndex();
  prevButton.textContent = stations[prevStationIndex].name;
  prevButton.className = `font-extrabold w-full text-white px-4 py-2 transition duration-300 hover:bg-${lines[currentLineIndex].color}-700`;

  // 現在の駅の背景色を変更
  stationMap.children[currentStationIndex].classList.add(
    `bg-${lines[currentLineIndex].color}-700`
  );
  // 他の駅の背景色を回復
  for (let i = 0; i < stationMap.children.length; i++) {
    if (i !== currentStationIndex) {
      stationMap.children[i].classList.remove(
        `bg-${lines[currentLineIndex].color}-700`
      );
    }
  }

  // 現在の駅を含む路線のみを取得
  availableLines = currentStation
    ? lines.filter((line) => currentStation.codes.includes(line.code))
    : [];
  console.log("availableLines", availableLines);

  displayLines();
}

/**
 * getStationIndexByOrder(order)
 * 順番で駅取得
 */
function getStationIndexByOrder(order) {
  //  駅のID から インデックス取得
  return stations.findIndex((station) => station.order === order);
}

/**
 * getStationIndexById(id)
 * 駅IDからインデックス取得
 */
function getStationIndexById(id) {
  return stations.findIndex((station) => station.id === id);
}

/**
 * getNextStationIndex()
 * 次の駅のインデックス
 */
function getNextStationIndex() {
  return (currentStationIndex + 1 + stations.length) % stations.length;
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
 * getLineIndexById(id)
 * 線路IDからインデックス取得
 */
function getLineIndexById(id) {
  return lines.findIndex((line) => line.id === id);
}

/**
 * getNextLineIndex()
 * 次の駅のインデックス
 */
function getNextLineIndex() {
  return (currentLineIndex + 1 + lines.length) % lines.length;
}

/**
 * getPrevLineIndex()
 * 前の駅のインデックス
 */
function getPrevLineIndex() {
  return (currentLineIndex - 1 + lines.length) % lines.length;
}


// TODO: 下上矢印キーで他の路線に進む
// issue: 駅の看板と駅の一覧が更新されない
function nextLine() {
  currentLineIndex = getNextLineIndex();
  updateStation();
  displayStations();
  displayLines();
}
function prevLine() {
  currentLineIndex = getPrevLineIndex();
  displayLines();
  displayStations();
  updateStation();
}

// キーボード操作
// 右矢印キーで次の駅に進む
// 左矢印キーで前の駅に戻る
document.onkeydown = (e) => {
  if (e.key === "ArrowRight") nextStation();
  if (e.key === "ArrowLeft") prevStation();
  if (e.key === "ArrowDown") nextLine();
  if (e.key === "ArrowUp") prevLine();
};

/**
 * @var onStationClick()
 * 駅をクリックして、駅の看板更新
 */
function onStationClick(order) {
  currentStationIndex = getStationIndexByOrder(order);
  updateStation();
}

/**
 * @var displayStations()
 * 駅の一覧表示
 */
function displayStations() {
  // station-mapの
  stationMap.innerHTML = "";
  // 駅の一覧表示
  for (const station of stations) {
    const stationElement = document.createElement("div");
    stationElement.className = `
            station text-sm w-full h-[40px] rounded-full 
            bg-${lines[currentLineIndex].color}-500 text-white flex items-center justify-center 
            m-1 cursor-pointer transition duration-100 hover:bg-${lines[currentLineIndex].color}-700
        `;
    // 順番
    stationElement.id = `station-map-${station.order}`;
    // 駅名
    stationElement.textContent = station.name;
    // クリックしたとき
    stationElement.onclick = () => onStationClick(station.order);

    stationMap.appendChild(stationElement);
  }
}

/**
 * @var displayLines()
 * 線路一覧表示
 */
function displayLines() {
  lineMap.innerHTML = "";
  // 線路表示の繰り返し
  for (const line of availableLines) {
    const lineElement = document.createElement("div");
    lineElement.className = `line text-sm w-full h-[40px] rounded-full bg-${line.color}-500 text-white flex items-center justify-center m-1 cursor-pointer transition duration-100 hover:bg-${line.color}-700`;

    lineElement.textContent = line.name;
    lineElement.id = line.id;
    lineElement.onclick = () => onLineClick(line.id);
    lineMap.appendChild(lineElement);
  }
}

/**
 * onLineClick()
 * 線路をクリックして、線路の看板更新
 */
function onLineClick(id) {
  currentLineIndex = getLineIndexById(id);
  const currentId = stations[currentStationIndex].id;
  stations = lines[currentLineIndex].stations; //線路の看板更新
  currentStationIndex = stations.findIndex(
    (station) => station.id === currentId
  ); // 駅の看板は保持
  displayStations();
  updateStation();
  console.log(stations);
}

/**
 * hideStationList()
 * クリックで駅の一覧を非表示にする関数
 */
function hideStationList() {
  let isHidden = true;
  document.getElementById("station-button").onclick = function () {
    if (!isHidden) {
      stationMapContainer.style.display = "none";
      isHidden = true;
    } else {
      stationMapContainer.style.display = "block";
      isHidden = false;
    }
  };
}

// ページ読み込み時に初期化
window.onload = () => {
  // 駅一覧表示
  displayStations();
  // 駅の看板更新
  updateStation();
  // 線路一覧表示
  displayLines();
  // クリックで駅の一覧表示を非表示
  hideStationList();
};
