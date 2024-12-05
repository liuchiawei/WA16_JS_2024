$(() => {
    // TODO: id=title
    var titleElement = $("#title")
    console.log(titleElement)

    // TODO: class=city
    var cityElements = $(".city")
    // document.getElementsByClassName('city')
    // document.querySelectorAll('.city')
    console.log(cityElements)

    // TODO: id=jp-city の class=city
    var jpCityList = $('#jp-city > .city')
    console.log(jpCityList)

    // TODO: id=us-city
    var usCityList = $('#us-city > .city')
    console.log(usCityList)

    // TODO: html() 取得
    var title = $('#title').html()
    console.log("title: ", title)

    // TODO: html() 設定
    $('#title').html('JP City')

    // TODO: .city に addClass()
    // bg-gray-300
    // jqc: jqaddclass
    $('.city').addClass('bg-gray-300');

    // TODO: .city に removeClass()
    // bg-gray-300
    $('.city').removeClass('bg-gray-300');

    // TODO: get(): .city に指定インデックスで取得(バニラJS)
    console.log($('.city').get(0))

    // TODO: eq(): .city に指定インデックスで取得(jQueryオブジェクト)
    console.log($('.city').eq(0))

    // TODO: eq(): .city の最初を取得し、class=bg-red-500 を追加
    $('.city').eq(0).addClass('bg-red-500')
    // var selectedCity = $('.city').get(0)
    // selectedCity.classList.add('bg-red-500')

    // TODO: first(): .city の最初を取得し、class=bg-red-500 を追加
    $('.city').first().addClass('bg-red-500')

    // TODO: last(): .city の最後を取得し、class=bg-red-500 を追加
    $('.city').last().addClass('bg-red-500')

    // TODO: filter(): 指定した条件に一致した要素を選択
    // .city をすべて取得し、奇数に class=bg-gray-200 を追加
    $('.city').filter(':odd').addClass('bg-gray-200')

    // TODO: not(): 指定した条件に一致しない要素を選択
    // 奇数以外（偶数）の要素に class=bg-blue-300 を追加 
    $('.city').not(':odd').addClass('bg-blue-300')

    // TODO: slice(): 選択した要素を部分的に取得
    // 2番目から3番目の要素を取得し、class=bg-orange-500 を追加
    $('.city').slice(1, 3).addClass('bg-orange-500')

    // nth-child()
    // TODO: id=us-city の class=city のインデックス「2」を選択
    var selectedCity
    // TODO: text() でコンテンツ表示
})