// View documentation at: https://docs.begin.com
export default function ToDoList ({ html, state }) {
  const { store } = state
  let todos = store.todos || []
  return html`
<style>
:host input {
    height: 65px;
    background: rgba(0, 0, 0, 0.003);
    box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
}
:host todo-item:last-child {
  border-bottom: none;
}
:host li:hover todo-item-destroy button {
  display: block;
}
</style>
<ul class="todo-list list-none m-none p-none">
  ${todos.map(todo => `<todo-item key="${todo.key}" item="${todo.item}" ${todo.completed ? 'checked' : ''}>${todo.item}</todo-item>
`).join('\n')}
</ul>`
}

