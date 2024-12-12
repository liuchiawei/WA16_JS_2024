$(function () {
    var selected = $();

    const defaultClass = "bg-gray-100 rounded border border-gray-300 p-2 mb-2";
    const selectedClass = "selected bg-orange-200";
    const unselectedClass = "bg-gray-100";

    function newItem() {
        const value = getInputValue();
        //TODO: liタグを作成し、テキスト表示
        const li = $('<li>');
        li.text(value)

        // バニラJSで書くと
        // const li = document.createElement('li')
        // li.innerText = value 

        // <li>xxxxx</li>

        //TODO: defaultClassを追加
        li.addClass(defaultClass)
        // <li class="xxxx xxx xxxx">xxxxx</li>
        return li;
    }

    function getInputValue() {
        return $('#input-text').val().trim() || 'New Item';
    }

    $('#btn-append').on('click', function () {
        const element = newItem();
        // TODO: 親要素(id=item-list)の最後に elementを追加
        // jqappend
        $('#item-list').append(element);

        $('#input-text').val('');
    });

    $('#btn-prepend').on('click', function () {
        const element = newItem();
        // TODO: 親要素(id=item-list)の最初に追加
        $('#item-list').prepend(element);

        // TODO: テキストボックス(id=input-text)を空にする
        $('#input-text').val('');
    });

    $('#btn-before').on('click', function () {
        if (selected.length) {
            const element = newItem();
            // TODO: 選択中の要素の前に追加
            selected.before(element)

            $('#input-text').val('');
        } else {
            alert('選択中の要素がありません。');
        }
    });

    $('#btn-after').on('click', function () {
        if (selected.length) {
            const element = newItem();
            // TODO: 選択中の要素の後に追加
            selected.after(element)

            $('#input-text').val('');
        } else {
            alert('選択中の要素がありません。');
        }
    });

    $('#btn-remove').on('click', function () {
        if (selected) {
            // TODO: 選択中の要素を削除

            // 選択解除
            selected = $();
        } else {
            alert('選択中の要素がありません。');
        }
    });

    $('#item-list').on('click', 'li', function () {
        $('#item-list li').removeClass(selectedClass).addClass(unselectedClass);
        // クリックした要素だけ、選択中にする
        $(this).addClass(selectedClass).removeClass(unselectedClass);
        // TODO: 選択
        // 選択用のメモリに、自分自身を入れる
        selected = $(this)
    });
});