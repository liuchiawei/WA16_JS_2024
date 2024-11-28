const items = [
    {
        id: 1,
        name: 'アイスコーヒー',
        price: 450,
    },
    {
        id: 2,
        name: 'アイスカフェラテ',
        price: 500,
    },
];

const messageElement = document.getElementById('message');
var selectedItem = {}

function createItemList() {
    for (const item of items) {
        var option = document.createElement('option')
        option.value = item.id;
        option.textContent = item.name;
        document.getElementById('itemList').append(option);
    }
}

function handleButtonClick() {
    messageElement.textContent = "";

    // 商品ID
    const itemId = document.getElementById('itemList').value;
    // 個数
    const quantity = document.getElementById('quantity').value;
    // 商品検索（ID）
    selectedItem = findItem(itemId);

    if (quantity <= 0) {
        messageElement.textContent = '個数を入力してくださし。';
    } else if (!selectedItem) {
        messageElement.textContent = '商品を入力してくださし。';
    } else {
        order(selectedItem, quantity);
    }
}

// セレクトボックスの変更時の処理
function handleSelectChange() {
    const itemId = document.getElementById('itemList').value;
    // 商品検索（ID）
    selectedItem = findItem(itemId);
    console.log(selectedItem);
    document.getElementById('price').textContent = selectedItem.price;
}

// 商品検索
function findItem(id) {
    return items.find((item) => item.id == id)
}

// オーダー
function order(item, quantity) {
    var totalPrice = item.price * quantity;

    var message = item.name + "を" + quantity + "個でよいですか？";
    message += totalPrice + "円になります。"

    messageElement.textContent = message;
}


createItemList();