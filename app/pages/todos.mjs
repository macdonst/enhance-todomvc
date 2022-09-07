// View documentation at: https://docs.begin.com
export default function Html ({ html }) {
  return html`
<style>
:host main {
	background: #fff;
	margin: 130px 0 40px 0;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
	            0 25px 50px 0 rgba(0, 0, 0, 0.1);
}

:host input::-webkit-input-placeholder {
	font-style: italic;
	font-weight: 400;
	color: rgba(0, 0, 0, 0.4);
}
:host input::-moz-placeholder {
	font-style: italic;
	font-weight: 400;
	color: rgba(0, 0, 0, 0.4);
}
:host input::input-placeholder {
	font-style: italic;
	font-weight: 400;
	color: rgba(0, 0, 0, 0.4);
}
:host h1 {
	top: -140px;
	color: #b83f45;
}
</style>
<main class="relative">
  <todo-main>
  </todo-main>
</main>
`
}
