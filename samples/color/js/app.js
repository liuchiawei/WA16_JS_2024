function getRandomColor() {
    // RGB: #RGB => 00 00 00
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor() {
    document.body.style.backgroundColor = getRandomColor();
}