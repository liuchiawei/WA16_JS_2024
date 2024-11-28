var character = document.getElementById('character');

// 初期設定
var x = window.innerWidth - character.offsetWidth; // キャラクターを画面右端に配置
var step = 2; // 移動量
var isAnimating = false;

// アニメーションの範囲（画面の幅）
var screenWidth = window.innerWidth;

/**
 * キャラクターの位置を更新
 */
function updateCharacter(x) {
    character.style.transform = `translateX(${x}px)`;
}

/**
 * animate()
 * アニメーション処理
 */
function animate() {
    // キャラクターの位置を更新
    x -= step;

    // 左端に到達したら右端にリセット
    if (x + character.offsetWidth < 0) {
        x = screenWidth; // 画面右端にリセット
    }

    // キャラクターの位置を反映
    updateCharacter(x);

    // 次のフレームをリクエスト
    if (isAnimating) {
        requestAnimationFrame(animate);
    }
}

/**
 * start()
 * アニメーション開始
 */
function start() {
    if (!isAnimating) {
        isAnimating = true;
        // アニメーション開始時に現在の位置を再計算
        x = window.innerWidth - character.offsetWidth;
        animate();
    }
}

/**
 * stop()
 * アニメーション停止
 */
function stop() {
    isAnimating = false;
}

// ウィンドウサイズ変更時に画面幅を更新
window.onresize = () => {
    screenWidth = window.innerWidth;
    if (!isAnimating) {
        // アニメーションが停止中なら初期位置を再計算
        x = screenWidth - character.offsetWidth;
        updateCharacter(x);
    }
};

// 初期位置を設定
updateCharacter(x);