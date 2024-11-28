const video = document.getElementById('video');
const volumeSlider = document.getElementById('volumeSlider');

// ビデオボリューム(0 - 1)
var volume = 0;
// ビデオファイル
const videoFile = "videos/video1.mp4";

/**
 * loadVideo()
 * ビデオ読み込み
 */
function loadVideo(filePath) {
    // TODO: 新しい動画設定で読み込み​
    video.src = filePath
    // TODO: 再生位置リセットで読み込み​
    video.load()
}

/**
 * onLoadedVideo()
 * ビデオ読み込み後の処理
 */
function onLoadedVideo() {
    // TODO: ビデオ音量設定

    // TODO: 音量スライダー設定
}

/**
 * onLoadedMetadata()
 * ビデオメタデータ読み込み後の処理
 */
function onLoadedMetadata() {
    // TODO: duration（長さ）表示
    document.getElementById('duration').textContent = video.duration
    // TODO: volume（音量）表示
    document.getElementById('volume').textContent = video.volume
    // TODO: currentTime（現在の時間）表示
    document.getElementById('currentTime').textContent = video.currentTime
    // TODO: paused（停止フラグ）表示
    document.getElementById('paused').textContent = video.paused
    // TODO: playbackRate（再生速度）表示
    document.getElementById('playbackRate').textContent = video.playbackRate
}

/**
 * changeVolume()
 * 音声ボリューム変更
 */
function onChangeVolume(event) {
    volume = event.target.value;
    changeVolume(volume)
}

/**
 * changeVolume()
 * 音声ボリューム変更
 */
function changeVolume(value) {
    video.volume = value;
}

/**
 * play()
 * 再生
 */
function play() {
    // TODO: ビデオ再生
}

/**
 * pause()
 * 停止
 */
function pause() {
    // TODO: ビデオ停止

}

/**
 * toggleMute()
 * 音声ミュート切り替え
 */
function toggleMute() {
    if (video.muted) {
        video.muted = false;
    } else {
        video.muted = true;
    }
}

// ビデオ読み込み
loadVideo(videoFile);