document.addEventListener('DOMContentLoaded', function () {
    const box1 = document.getElementById('box1');

    // 各種情報の取得
    const width = box1.offsetWidth; // 要素の幅
    const height = box1.offsetHeight; // 要素の高さ
    const offset = box1.getBoundingClientRect(); // 要素の位置（オフセット）
    const id = box1.id; // 要素のID属性

    // 値を設定
    document.querySelector('#id-info span').textContent = id;
    document.querySelector('#width-info span').textContent = `${width}px`;
    document.querySelector('#height-info span').textContent = `${height}px`;
    document.querySelector('#offset-info span').textContent = `Top: ${offset.top}px, Left: ${offset.left}px`;

    const box2 = document.getElementById('box2');
    // 幅と高さを設定
    box2.style.width = '300px';
    box2.style.height = '50px';

    // 位置を設定
    box2.style.position = 'absolute'; // 必要であれば設定
    box2.style.left = '30px';
    box2.style.top = '380px';

    // body の高さを 5000px にする
    document.body.style.height = '5000px';
});
