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
</style>
<main class="relative">
	<todo-header>
    	<todo-new-item></todo-new-item>
	</todo-header>
	<section class="relative z1">
		<todo-toggle-all></todo-toggle-all>
		<todo-list></todo-list>
	</section>
	<todo-footer>
		<todo-count></todo-count>
		<todo-filters></todo-filters>
		<todo-clear-completed></todo-clear-completed>
	</todo-footer>
</main>
`
}
