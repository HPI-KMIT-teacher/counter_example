function reactive(data, onChange) {
    return new Proxy(data, {
        set(target, key, value) {
            target[key] = value; // зберігаємо значення
            onChange(); // автоматично оновлюємо DOM
            return true;
        }
    })
}

// Стан — звичайний об'єкт
const state = reactive(
    { count: 0 }, // початковий стан
    render  // функція яка викликається при БУДЬ-якій зміні
)

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
/*
const target = { count: 0, name: "JS"};

const handler = {
    // get-trap — спрацьовує при ЧИТАННІ будь-якої властивості
    get(target, key) {
        console.log(`${key} was read`);
        return target[key]; // повертаємо оригінальне значення
    },

    // set-trap — спрацьовує при ЗАПИСІ будь-якої властивості
    set(target, key, value) {
        console.log(`${key} = ${value} was set`);
        target[key] = value; // зберігаємо значення
        return true;  // ❗ обов'язково повернути true
    }
};

const proxy = new Proxy(target, handler)
*/
/*
    target — оригінальний об'єкт, який «загортаємо»
    handler — об'єкт з «пастками» (traps) — функціями, що перехоплюють операції
*/

/*
const handler = {
get(target, key) { },          // читання: proxy.key
set(target, key, value) { },   // запис: proxy.key = value
has(target, key) { },          // перевірка: "key" in proxy
deleteProperty(target, key) { } // видалення: delete proxy.key
};
*/