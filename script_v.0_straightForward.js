        // СТАН - просто змінна
        let count = 0;



        function increment() {
            count++;

            // Оновлюємо DOM вручну - кожен елемент окремо
            document.getElementById("display").textContent = count;
            document.getElementById("status").textContent = 
            count > 0 ? "Позитивне" : count < 0 ? "Негативне" : "Нейтральне значення";
            document.getElementById("display").style.color = 
            count > 0 ? "green" : count < 0 ? "red" : "black";
            document.getElementById("log").textContent = `Остання дія: +1, результат: ${count}`
        }

        function decrement() {
            count--;
            // ❗ Повторюємо ТЕ САМЕ для кожної функції — копіювання!
            document.getElementById("display").textContent = count;
            document.getElementById("status").textContent = 
            count > 0 ? "Позитивне" : count < 0 ? "Негативне" : "Нейтральне значення";
            document.getElementById("display").style.color = 
            count > 0 ? "green" : count < 0 ? "red" : "black";
            document.getElementById("log").textContent = `Остання дія: -1, результат: ${count}`;
        }

        function reset() {
            count = 0;

            // ❗ І знову те саме...
            document.getElementById("display").textContent = count;
            document.getElementById("status").textContent = "Нейтральне значення";
            document.getElementById("display").style.color = "black";
            document.getElementById("log").textContent = `Скинуто до 0`;
    }