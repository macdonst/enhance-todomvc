// View documentation at: https://docs.begin.com
export default function ToDoItemToggle ({ html, state }) {
  const { attrs } = state
  const { key, item = '', checked = '' } = attrs
  return html`
  <style>

:host button {
	width: 40px;
	height: auto;
	margin: auto 0;
	-webkit-appearance: none;
	appearance: none;
}

:host button {
	background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23949494%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');
	background-position: center left;
}

:host button.completed {
	background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%2359A193%22%20stroke-width%3D%223%22%2F%3E%3Cpath%20fill%3D%22%233EA390%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22%2F%3E%3C%2Fsvg%3E');
}
  </style>
  <form action="/todos/${key}" method="POST">
      <input name="completed" type="hidden" value="${checked ? '' : 'on' }" />
      <input name="item" type="hidden" value="${item}" />
      <button class="${checked ? 'completed' : ''} bg-no-repeat text-center absolute top0 bottom0"></button>
  </form>
`
}

