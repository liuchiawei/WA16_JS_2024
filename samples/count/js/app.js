var count = 0;
const counter = document.getElementById("counter");

function increment() {
    count++;
    counter.textContent = count;
}

function decrement() {
    count--;
    counter.textContent = count;
}