// View documentation at: https://docs.begin.com
function pluralize(count, word) {
  return count === 1 ? word : word + 's';
}

export default function ToDoFooter ({ html, state }) {
  const { store } = state
  let { todos = [], filter = 'all' } = store
  let active = todos.filter(todo => !todo.completed)
  let activeTodoWord = pluralize(active.length, 'item');

  return html`
<footer class="footer">
  <span class="todo-count">
    <strong>${active.length}</strong> ${activeTodoWord} left
  </span>
  <ul class="filters">
    <li>
      <a
        href="/todos"
        class="${filter === 'all' ? 'selected' : ''}">
          All
      </a>
    </li>
    <li>
      <a
        href="/todos?filter=active"
        class="${filter === 'active' ? 'selected' : ''}">
          Active
      </a>
    </li>
    <li>
      <a
        href="/todos?filter=completed"
        class="${filter === 'completed' ? 'selected' : ''}">
          Completed
      </a>
    </li>
  </ul>
  <form action="/todos/clearcompleted" method="POST">
    <button
      class="clear-completed"
    >
      Clear completed
    </button>
  </form>
</footer>`
}

