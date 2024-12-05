$(document).ready(function () {
    var titleElement = $("#title");
    var messageElement = $("#message");
    var diceElement = $("#dice");
    var number = 1;

    titleElement.text('DICE');
    messageElement.html('サイコロをふってください！');

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max + 1 - min)) + min;
    }

    const updateDiceImage = (number) => {
        var resultElement = $("#result");
        resultElement.attr("src", "./images/dice" + number + ".png");
    };

    const rollDice = () => {
        console.log("Click!");

        var timer = setInterval(() => {
            number = randomNumber(1, 6);
            updateDiceImage(number);
        }, 50);

        var resultElement = $("#result");
        resultElement.addClass('rolling');

        setTimeout(() => {
            clearInterval(timer);
            resultElement.removeClass('rolling');
            messageElement.html("サイコロをふりました！");
        }, 2000);
    };

    // クリックイベントを登録
    diceElement.on("click", rollDice);

    // ページ読み込み時の処理
    $(window).on("load", function () {
        $("#loading").hide();
    });
});
