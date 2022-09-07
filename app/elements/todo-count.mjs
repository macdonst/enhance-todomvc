// View documentation at: https://docs.begin.com
function pluralize(count, word) {
  return count === 1 ? word : word + 's';
}

export default function ToDoCount ({ html, state }) {
  const { store } = state
  let { todos = [] } = store
  let active = todos.filter(todo => !todo.completed)
  let activeTodoWord = pluralize(active.length, 'item');

  return html`
<style>
    :host {
        float: left;
    }
</style>
<span class="text-left">
  <strong class="font-medium">${active.length}</strong> ${activeTodoWord} left
</span>`
}

