// View documentation at: https://docs.begin.com
import { getTodos, upsertTodo } from '../../../models/todos.mjs'

export async function post () {
  const todos = await getTodos()
  const allComplete = todos.filter(todo => todo.completed).length === todos.length ? true : false

  todos.map(async todo => {
    todo.completed = !allComplete
    await upsertTodo(todo)
  })

  return {
    location: '/todos'
  }
}
