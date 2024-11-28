let timer = null;
let elapsedSeconds = 0;

function updateTime() {
    const hours = String(Math.floor(elapsedSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((elapsedSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(elapsedSeconds % 60).padStart(2, '0');
    document.getElementById("time").textContent = `${hours}:${minutes}:${seconds}`;
}

function start() {
    if (!timer) {
        timer = setInterval(() => {
            elapsedSeconds++;
            updateTime();
        }, 1000);
    }
}

function stop() {
    clearInterval(timer);
    timer = null;
}

function reset() {
    stop();
    elapsedSeconds = 0;
    updateTime();
}

updateTime();