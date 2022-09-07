// View documentation at: https://docs.begin.com
export default function ToDoFooter ({ html }) {
  return html`
<style>
:host footer {
	padding: 10px 15px;
	height: 20px;
	text-align: center;
	font-size: 15px;
	border-color: #e6e6e6;
}

:host footer:before {
	content: '';
	position: absolute;
	right: 0;
	bottom: 0;
	left: 0;
	height: 50px;
	overflow: hidden;
	box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),
	            0 8px 0 -3px #f6f6f6,
	            0 9px 1px -3px rgba(0, 0, 0, 0.2),
	            0 16px 0 -6px #f6f6f6,
	            0 17px 2px -6px rgba(0, 0, 0, 0.2);
}
</style>
<footer class="text-center border-solid border1">
  <slot></slot>
</footer>`
}

