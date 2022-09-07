// View documentation at: https://docs.begin.com
export default function ToDoHeader ({ html }) {
  return html`
<style>
    :host h1 {
        top: -140px;
        color: #b83f45;
    }
</style>
<header>
    <h1 class="absolute w-full font-thin text-center text5">todos</h1>
    <slot></slot>
</header>
`
}

