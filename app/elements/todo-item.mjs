// View documentation at: https://docs.begin.com
export default function ToDoItem ({ html, state }) {
  const { attrs } = state
  const { key, item = '' } = attrs

  const booleanAttr = (attrs, attr) => Object.keys(attrs).includes(attr) ? attr : ''

  const checked = booleanAttr(attrs, 'checked')

  return html`
<style>
  :host:li {
    border-color: #ededed;
  }
</style>
<li class="${checked ? 'completed' : ''} relative text2 border-solid border1">
  <div class="view">
    <todo-item-toggle key="${key}" checked="${checked}" item="${item}">
    </todo-item-toggle>
    <todo-item-text key="${key}" checked="${checked}" item="${item}"></todo-item-text>
    <todo-item-destroy key="${key}"></todo-item-destroy>
  </div>
</li>`
}

