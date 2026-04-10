Проблема:
  JS змінна змінилась  →  DOM не знає про це  →  оновлюй вручну

Поточний підхід:
  змінити count  →  ВРУЧНУ викликати render()  →  DOM оновився

Ідеальний підхід (мрія):
  змінити count  →  DOM оновився АВТОМАТИЧНО


| Наш Counter клас                 | React компонент                           |
| -------------------------------- | ----------------------------------------- |
| constructor(container, options)  | function Counter({ label, step })         |
| this.state (Proxy)               | const [count, setCount] = useState(0)     |
| this.render() — перегенерує HTML | React сам викликає рендер при зміні state |
| this.template() — рядок HTML     | return <div>...</div> (JSX)               |
| this.bindEvents()                | onClick={increment}                       |
| new Counter("id", options)       | <Counter label="..." step={...} />        |