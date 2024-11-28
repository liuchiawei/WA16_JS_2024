const counter = document.getElementById("counter");

function increment() {
    var img = document.createElement('img');
    img.src = "./img/ha.png";
    img.width = 50;
    counter.append(img)
}

function decrement() {
    var img = counter.lastChild;
    counter.removeChild(img);
}