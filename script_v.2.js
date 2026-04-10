const state = {
    _count: 0,

    get count() {
        return this._count;
    },

    set count(value) {
        this._count = value;
        render(); // ← автоматично при кожній зміні! ✅
    }
}

function render () {
        document.getElementById("display").textContent = state.count;
        document.getElementById("status").textContent = 
        state.count > 0 ? "Позитивне" : state.count < 0 ? "Негативне" : "Нейтральне значення";
        document.getElementById("display").style.color = 
        state.count > 0 ? "green" : state.count < 0 ? "red" : "black";
        document.getElementById("log").textContent = 
        `Значення: ${state.count} | Оновлено: ${new Date().toLocaleTimeString()}`
}

function increment() { state.count++; }
function decrement() { state.count--; }
function reset() { state.count = 0; }

render();

/*
const person = {
    _name: 'Hennadii', // _ означає "внутрішнє поле"

    get name() {
        console.log("Хтось читає ім'я")
        return this._name
    },

    set name(value) {
        console.log(`Ім'я змінюється на: ${value}`);
        this._name = value;
    }
}
*/