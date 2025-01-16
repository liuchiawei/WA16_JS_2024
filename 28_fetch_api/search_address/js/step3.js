function getApiURL() {
    const currentURL = location.href
    const fileName = currentURL.substring(currentURL.lastIndexOf('/') + 1);
    const baseURL = currentURL.replace(fileName, '');
    return baseURL;
}

const BASE_URL = getApiURL();
const PREFECTURE_FILE_PATH = BASE_URL + 'data/prefectures.json';
// const PREFECTURE_FILE_PATH = "./data/prefectures.json";

// 都道府県JSON読み込み
const loadPrefectures = async () => {
    const response = await fetch(PREFECTURE_FILE_PATH);
    const prefectures = await response.json();
    console.log(prefectures);
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

(() => {
    loadPrefectures();
})();