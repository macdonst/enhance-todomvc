// View documentation at: https://docs.begin.com
export default function ToDoFilters ({ html, state }) {
  const { store } = state
  let { filter = 'all' } = store

  return html`
    <style>
        :host a {
            border-color: transparent;
        }
        :host a:hover {
            border-color: #DB7676;
        }
        :host a.selected {
            border-color: #CE4646;
        }
    </style>
    <ul class="m-none p-none list-none absolute right0 left0">
      <li class="inline">
        <a
          href="/todos"
          class="${filter === 'all' ? 'selected' : ''} m-6 no-underline radius0 pt-6 pb-6 pl-3 pr-3 border-solid border1">
            All
        </a>
      </li>
      <li class="inline">
        <a
          href="/todos?filter=active"
          class="${filter === 'active' ? 'selected' : ''} m-6 no-underline radius0 pt-6 pb-6 pl-3 pr-3 border-solid border1">
            Active
        </a>
      </li>
      <li class="inline">
        <a
          href="/todos?filter=completed"
          class="${filter === 'completed' ? 'selected' : ''} m-6 no-underline radius0 pt-6 pb-6 pl-3 pr-3 border-solid border1">
            Completed
        </a>
      </li>
    </ul>`
}

