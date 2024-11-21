const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");

/**
 * openModal(id)
 * 商品詳細モーダルを表示
 */
function openModal(id) {
    // id を使って items 配列内の該当する商品を探す
    const item = items.find(item => item.id === id);

    // アイテムチェック
    if (!item) return;

    // アイテムがあればモーダル表示
    modalContent.innerHTML = `
            <h2 class="text-2xl font-bold my-5">${item.name}</h2>
            <img src="${item.image}" class="w-full h-80 rounded-xl object-cover mb-4" />
            <p class="text-left mb-4">${item.description}</p>
            <button onclick="closeModal()" class="w-full border border-gray-300 text-gray-500 py-2 px-4 rounded">Close</button>
        `;
    modal.classList.remove("hidden");
}

/**
 * closeModal()
 * モーダルを閉じる
 */
function closeModal() {
    document.getElementById("modal").classList.add("hidden");
}