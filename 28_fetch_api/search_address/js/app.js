function getApiURL() {
    const currentURL = location.href
    const fileName = currentURL.substring(currentURL.lastIndexOf('/') + 1);
    const baseURL = currentURL.replace(fileName, '');
    return baseURL;
}

const BASE_URL = getApiURL();
const PREFECTURE_FILE_PATH = BASE_URL + 'data/prefectures.json';
const SEARCH_URI = "https://zipcloud.ibsnet.co.jp/api/search";


// 都道府県JSON読み込み
const loadPrefectures = async () => {
    const response = await fetch(PREFECTURE_FILE_PATH);
    const text = await response.text()
    const prefectures = JSON.parse(text)
    renderPrefectures(prefectures);
}

// 都道府県プルダウン作成
const renderPrefectures = (prefectures) => {
    prefectures.forEach((prefecture) => {
        var option = document.createElement('option');
        option.value = prefecture.code;
        option.innerHTML = prefecture.name;
        document.getElementById('prefecture').appendChild(option)
    })
}

const loadPrefecturesForThen = () => {
    fetch(PREFECTURE_FILE_PATH)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network error');
            }
            console.log(response.json());
            return response.json();
        })
        .then((prefectures) => {
            renderPrefectures(prefectures);
        })
        .catch(error => {
            console.log(error);
        });
}

// 郵便番号検索
const searchAPI = async (zipcode) => {
    if (!zipcode) return;
    const query_param = new URLSearchParams({ zipcode: zipcode, })
    const uri = SEARCH_URI + "?" + query_param;
    // console.log(uri)
    const response = await fetch(uri);
    const data = await response.json();
    return data;
}

const searchHandler = async () => {
    const zipcode = document.getElementById('zipcode').value;
    if (!zipcode) {
        alert('郵便番号を入力してください')
    }
    var data = await searchAPI(zipcode);
    if (!data) return;
    if (!data.results) return;
    var results = data.results[0]

    document.getElementById('prefecture').value = results.prefcode;
    document.getElementById('city').value = results.address2 + results.address3;
}

(() => {
    loadPrefectures();
    // loadPrefecturesForThen();
})();