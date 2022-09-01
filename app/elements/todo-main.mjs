// View documentation at: https://docs.begin.com
export default function ToDoMain ({ html, state }) {
  const { store } = state
  let todos = store.todos || []
  return html`
<div>
  <header className="header">
    <h1>todos</h1>
    <form action="/todos" method="POST">
      <input
        name="item"
        class="new-todo"
        placeholder="What needs to be done?"
        autoFocus
      />
      <button class="hidden">Save</button>
    </form>
  </header>
  <section class="main">
    <form action="/todos/toggleall" method="POST">
      <button class="toggle-all"></button>
    </form>
    <ul class="todo-list">
      ${todos.map(todo => `<todo-item key="${todo.key}" item="${todo.item}" ${todo.completed ? 'checked' : ''}>${todo.item}</todo-item>
`).join('\n')}
    </ul>
  </section>
  <todo-footer></todo-footer>
</div>`
}

