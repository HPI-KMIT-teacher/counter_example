let count = 0;

function render (message) {
    document.getElementById("display").textContent = count;
    document.getElementById("status").textContent = 
    count > 0 ? "Позитивне" : count < 0 ? "Негативне" : "Нейтральне значення";
    document.getElementById("display").style.color = 
    count > 0 ? "green" : count < 0 ? "red" : "black";
    document.getElementById("log").textContent = 
    `Значення: ${count} | ${message} | Оновлено: ${new Date().toLocaleTimeString()}`
}

function increment() {
    count++;
    render(`Остання дія: +1, результат: ${count}`);
}

function decrement() {
    count--;
    render(`Остання дія: -1, результат: ${count}`);
}

function reset() {
    count = 0;
    render(`Скинуто до 0`);
}

render();