// View documentation at: https://docs.begin.com
export default function ToDoMain ({ html, state }) {
  const { store } = state
  let todos = store.todos || []
  return html`
<div>
  <header className="header">
    <h1 class="absolute w-full font-thin text-center text5">todos</h1>
    <todo-new-item></todo-new-item>
  </header>
  <section class="relative z1">
    <todo-toggle-all></todo-toggle-all>
    <todo-list>
      ${todos.map(todo => `<todo-item key="${todo.key}" item="${todo.item}" ${todo.completed ? 'checked' : ''}>${todo.item}</todo-item>
`).join('\n')}
    </todo-list>
  </section>
  <todo-footer>
    <todo-count></todo-count>
    <todo-filters></todo-filters>
    <todo-clear-completed></todo-clear-completed>
  </todo-footer>
</div>`
}

