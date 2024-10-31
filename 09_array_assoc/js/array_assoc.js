const current = document.getElementById("current-station");
const furigana = document.getElementById("current-furigana");
const next = document.getElementById("next-station");
const prev = document.getElementById("prev-station");

// 連想配列の定義
var station = {
  name: "東京",
  furigana: "とうきょう",
  address: "東京都千代田区",
  line: "山手線",
};

// DevTools で確認
console.log(station);

// 駅名表示
current.innerHTML = station.name;
furigana.innerHTML = station.furigana;

// 駅名、ふりがなのデータ更新
station.name = "有楽町";
station.furigana = "ゆらくちょう";

// 駅名表示
current.innerHTML = station.name;
furigana.innerHTML = station.furigana;

// 連想配列の配列
// 山手線の各駅を連想配列として定義
const stations = [
  {
    id: 1,
    name: "東京",
    furigana: "とうきょう",
  },
  {
    id: 2,
    name: "神田",
    furigana: "かんだ",
  },
  {
    id: 3,
    name: "秋葉原",
    furigana: "あきはばら",
  },
  {
    id: 4,
    name: "御徒町",
    furigana: "おかちまち",
  },
  {
    id: 5,
    name: "上野",
    furigana: "うえの",
  },
  {
    id: 6,
    name: "鶯谷",
    furigana: "うぐいすだに",
  },
  {
    id: 7,
    name: "日暮里",
    furigana: "にっぽり",
  },
  {
    id: 8,
    name: "西日暮里",
    furigana: "にしにっぽり",
  },
  {
    id: 9,
    name: "田端",
    furigana: "たばた",
  },
  {
    id: 10,
    name: "駒込",
    furigana: "こまごめ",
  },
  {
    id: 11,
    name: "巣鴨",
    furigana: "すがも",
  },
  {
    id: 12,
    name: "大塚",
    furigana: "おおつか",
  },
  {
    id: 13,
    name: "池袋",
    furigana: "いけぶくろ",
  },
  {
    id: 14,
    name: "目白",
    furigana: "めじろ",
  },
  {
    id: 15,
    name: "高田馬場",
    furigana: "たかだのばば",
  },
  {
    id: 16,
    name: "新大久保",
    furigana: "しんおおくぼ",
  },
  {
    id: 17,
    name: "新宿",
    furigana: "しんじゅく",
  },
  {
    id: 18,
    name: "代々木",
    furigana: "よよぎ",
  },
  {
    id: 19,
    name: "原宿",
    furigana: "はらじゅく",
  },
  {
    id: 20,
    name: "渋谷",
    furigana: "しぶや",
  },
  {
    id: 21,
    name: "恵比寿",
    furigana: "えびす",
  },
  {
    id: 22,
    name: "目黒",
    furigana: "めぐろ",
  },
  {
    id: 23,
    name: "五反田",
    furigana: "ごたんだ",
  },
  {
    id: 24,
    name: "大崎",
    furigana: "おおさき",
  },
  {
    id: 25,
    name: "品川",
    furigana: "しながわ",
  },
  {
    id: 26,
    name: "田町",
    furigana: "たまち",
  },
  {
    id: 27,
    name: "浜松町",
    furigana: "はままつちょう",
  },
  {
    id: 28,
    name: "新橋",
    furigana: "しんばし",
  },
  {
    id: 29,
    name: "有楽町",
    furigana: "ゆらくちょう",
  },
];

// DevTools で確認
console.log(stations);

// 現在の駅ID
let currentID = 0;

let currentStation = stations[currentID];
console.log(currentStation);

current.innerHTML = currentStation.name;
furigana.innerHTML = currentStation.furigana;

// 前、次の駅IDの計算
let prevID = currentID === 0 ? 28 : currentID - 1;
let nextID = currentID === 28 ? 0 : currentID + 1;

function displayStation() {
  // 前の駅名表示
  prev.innerHTML = stations[prevID].name;

  // 次の駅名表示
  next.innerHTML = stations[nextID].name;

  // 今の駅名表示
  let currentStation = stations[currentID];
  current.innerHTML = currentStation.name;

  // DevTools で確認
  console.log(currentID + currentStation.name);
}

window.addEventListener("load", displayStation);

// 前の駅をクリックした時の処理
prev.addEventListener("click", () => {
  // 現在、前、次の駅IDを再計算
  currentID = prevID;
  prevID = currentID === 0 ? 28 : currentID - 1;
  nextID = currentID === 28 ? 0 : currentID + 1;

  // 画面表示を更新
  displayStation();
});

// 次の駅をクリックした時の処理
next.addEventListener("click", () => {
  // 現在、前、次の駅IDを再計算
  currentID = nextID;
  prevID = currentID === 0 ? 28 : currentID - 1;
  nextID = currentID === 28 ? 0 : currentID + 1;

  // 画面表示を更新
  displayStation();
});
