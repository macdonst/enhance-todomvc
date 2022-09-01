// View documentation at: https://docs.begin.com
export default function ToDoItem ({ html, state }) {
  const { attrs } = state
  const { key, item = '' } = attrs

  const booleanAttr = (attrs, attr) => Object.keys(attrs).includes(attr) ? attr : ''

  const checked = booleanAttr(attrs, 'checked')

  return html`
<li class="${checked ? 'completed' : ''}">
  <div class="view">
    <form action="/todos/${key}" method="POST">
      <input name="completed" type="hidden" value="${checked ? '' : 'on' }" />
      <input name="item" type="hidden" value="${item}" />
      <button class="toggle ${checked ? 'completed' : ''}"></button>
    </form>
    <form action="/todos/${key}" method="POST">
      <input name="item" type="text" value="${item}" class="edit" />
      <button class="hidden"></button>
    </form>
    <form action="/todos/${key}/delete" method="POST">
      <button class="destroy" />
    </form>
  </div>
</li>`
}

