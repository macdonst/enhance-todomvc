// View documentation at: https://docs.begin.com
export default function ToDoToggleAll ({ html }) {
  return html`
<style>
:host button {
	width: 45px;
	height: 65px;
	font-size: 0;
	top: -65px;
	left: -0;
}
:host button:before {
	content: '❯';
	display: inline-block;
	font-size: 22px;
	color: #949494;
	padding: 10px 27px 10px 27px;
	-webkit-transform: rotate(90deg);
	transform: rotate(90deg);
}
:host button:checked:before {
	color: #484848;
}
</style>
<form action="/todos/toggleall" method="POST">
    <button class="flex absolute items-center justify-center"></button>
</form>`
}

