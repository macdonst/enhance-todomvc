// View documentation at: https://docs.begin.com
import { getTodos, deleteTodo } from '../../../models/todos.mjs'

export async function post () {
  const todos = await getTodos()

  todos.map(async todo => {
    if (todo.completed) {
      await deleteTodo(todo.key)
    }
  })

  return {
    location: '/todos'
  }
}
