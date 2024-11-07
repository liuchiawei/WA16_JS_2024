// TODO: 配列の定義（'コーヒー', '紅茶', 'ほうじ茶'）

var drinks = ["コーヒー", "紅茶", "ほうじ茶"];
console.log(drinks);


console.log(items)

/**
 * 配列を文字列で表示
 */
function showArrayString() {
  // 配列をカンマ区切りの文字列に変換
  // join() メソッドは、配列の要素を指定した文字列で結合して、新しい文字列を返す
  var string = drinks.join(", ");
  document.getElementById("array-string").innerHTML = string;
}

/**
 * 配列の要素表示
 */
function showItem() {
  const index = document.getElementById("input-index").value;
  // インデックス範囲内かチェック
  if (index >= 0 && index < drinks.length) {
    // TODO: items に index を指定してデータ表示
    document.getElementById("input-value").value = drinks[index];
    document.getElementById("error").innerHTML = "";
  } else {
    // TODO: 配列の個数から、最大インデックスを設定
    var maxIndex = drinks.length - 1;
    var error = `0 から${maxIndex}の範囲で指定してください。`;
    document.getElementById("error").innerHTML = error;
  }
}

/**
 * 値の更新
 */
function updateItem() {

  // インデックスの取得
  const index = document.getElementById("input-index").value;
  // 値の取得
  const value = document.getElementById("input-value").value;

  console.log(index, value);


  // TODO: インデックスを指定して値更新
  drinks[index] = value;

  // 配列の値表示
  showItem();

  // 配列の文字列表示
  showArrayString();
}

showArrayString();
