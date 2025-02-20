// DOM取得
const videoEl = document.getElementById('video');
const canvasEl = document.getElementById('canvas');

// キャンバスのコンテキスト
const ctx = canvasEl.getContext('2d');

// 映像サイズ
const videoWidth = 640;
const videoHeight = 480;

// 顔検出器
let detector;

/**
 * 顔検出機械学習モデルの設定
 * - MediaPipeFaceMeshを使用
 * - createDetectorを使用して検出器を生成
 */
async function loadModel() {
    // MediaPipeFaceMeshを選択
    const model = faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh;
    // @mediapipe/face_mesh ライブラリを読み込み
    const detectorConfig = {
        runtime: 'mediapipe',
        solutionPath: 'https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh',
    };
    // 検出器を作成
    detector = await faceLandmarksDetection.createDetector(model, detectorConfig);
}

/**
 * Webカメラを有効
 * - getUserMediaを使用してWebカメラの映像を取得
 * - video要素に映像を設定
 * - video要素を再生
 * @return {Promise<void>} streamの取得が完了したpromise
 */
async function setupCamera() {
    const config = {
        video: { width: videoWidth, height: videoHeight, facingMode: 'user' },
        audio: false,
    }
    // TODO: Webカメラ有効: await navigator.mediaDevices.getUserMedia(config)
    // videoEl.srcObject にメディアストリーム設定
    videoEl.srcObject = await navigator.mediaDevices.getUserMedia(config);

    // TODO: videoEl でビデオ再生
    await videoEl.play();
}

/**
 * 顔検出処理
 *
 * @return {Promise<Array<Face>>>}
 */
async function detectFace() {
    const estimationConfig = { flipHorizontal: false };
    // TODO: 顔検知処理(非同期処理): detector.estimateFaces()
    const faces = detector.estimateFaces(videoEl, estimationConfig);
    // console.log(faces);
    return faces;
}

/**
 * 顔検出結果を描画
 * - 検出された顔の各点を赤色で描画
 * - canvasの座標に変換して描画
 * @param {Array<Face>} faces 顔検出結果
 */
function drawResults(faces) {
    // キャンバスをクリア
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
    // 各点を赤色
    ctx.fillStyle = 'red';
    if (faces && faces.length > 0) {
        faces.forEach((face) => {
            // 検出された各点の座標が格納
            const landmarks = face.landmarks || face.keypoints;
            // 顔検出の各点を描画
            const upperLipIndices = [61, 146, 91, 181, 84, 17, 314, 405, 321, 375, 291, 308, 324, 318, 402, 317, 14, 87, 178, 88, 95, 78, 191, 80, 81, 82, 13];

            landmarks.forEach((point, index) => {
                if (upperLipIndices.includes(index)) {
                    // canvasの座標に変換
                    const x = point.x * canvasEl.width / videoWidth;
                    const y = point.y * canvasEl.height / videoHeight;
                    // 点を描画
                    ctx.beginPath();
                    ctx.arc(x, y, 1, 0, 2 * Math.PI);
                    ctx.fill();
                }
            });
        });
    }
}

// 毎フレーム、顔検出と描画を実行するループ
async function render() {
    const faces = await detectFace();
    drawResults(faces);
    requestAnimationFrame(render);
}

/**
 * メインアプリケーション
 *
 * - カメラの映像を setup
 * - 顔検出モデルを読み込み
 * - video 要素を再生開始
 * - 毎フレーム顔検出と描画を実行するループを実行
 */
async function app() {
    await loadModel();
    await setupCamera();
    render();
}

app();