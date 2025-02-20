// ページの読み込みが完了したら実行
document.addEventListener('DOMContentLoaded', () => {
    // TODO: 1次元テンソルの作成: tf.tensor1d()
    const tensor1d = [];
    showResult('tensor-1d', tensor1d);

    // TODO: 2次元テンソルの作成: tf.tensor2d()
    const tensor2d = [];
    showResult('tensor-2d', tensor2d);

    // テンソル同士の加算
    const t1 = tf.tensor1d([1, 2]);
    const t2 = tf.tensor1d([3, 4]);
    // TODO: テンソル同士の加算: add()
    const resultCalculated = [];

    showResult('tensor-calculated', resultCalculated);
});

function showResult(id, tensor) {
    tensor.array().then(data => {
        const div = document.getElementById(id);
        div.textContent = `Tensor: [${data.join(', ')}]`;
    });
}