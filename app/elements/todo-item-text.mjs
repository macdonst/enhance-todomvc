// View documentation at: https://docs.begin.com
export default function ToDoItemText ({ html, state }) {
  const { attrs } = state
  const { key, item = '', checked = '' } = attrs
  return html`
<style>
:host input {
	width: calc(100% - 43px);
	margin: 0 0 0 43px;
}
:host input:focus {
	box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
	border: 1px solid #999;
}
:host input.completed {
	color: #949494;
	text-decoration: line-through;
}
</style>
<form action="/todos/${key}" method="POST">
	<input name="item" type="text" value="${item}"
	class="${checked ? 'completed' : '' } relative border0 leading3 block pt-1 pb-1 pr0 pl0 text1" />
	<button class="hidden"></button>
</form>`
}

