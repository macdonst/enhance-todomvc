// View documentation at: https://docs.begin.com
export default function ToDoItemDestroy ({ html, state }) {
  const { attrs } = state
  const { key } = attrs
  return html`
<style>
:host button {
	right: 10px;
	width: 40px;
	height: 40px;
	margin: auto 0;
	color: #949494;
	transition: color 0.2s ease-out;
}
:host button:hover,
:host button:focus {
	color: #C18585;
}
:host button:after {
	content: '×';
	display: block;
	height: 100%;
	line-height: 1.1;
}
</style>
<form action="/todos/${key}/delete" method="POST">
    <button class="hidden absolute top0 bottom0 text2" />
</form>`
}

