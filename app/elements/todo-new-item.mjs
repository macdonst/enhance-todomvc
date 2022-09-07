// View documentation at: https://docs.begin.com
export default function ToDoNewItem ({ html }) {
  return html`
<style>

:host input {
	height: 65px;
	background: rgba(0, 0, 0, 0.003);
	box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
}
</style>
<form action="/todos" method="POST">
	<input
	name="item"
	class="relative m-none w-full text1 leading3 pt0 pr0 pb0 pl3"
	placeholder="What needs to be done?"
	autoFocus
	/>
	<button class="hidden">Save</button>
</form>`
}

