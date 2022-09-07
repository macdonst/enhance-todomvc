// View documentation at: https://docs.begin.com
export default function ToDoClearCompleted ({ html }) {
  return html`
    <style>
    :host {
        float: right;
    }
    :host:hover {
        text-decoration: underline;
    }
    </style>
    <form action="/todos/clearcompleted" method="POST">
        <button
        class="relative leading1 no-underline cursor-pointer"
        >
        Clear completed
        </button>
    </form>`
}

