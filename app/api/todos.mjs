// View documentation at: https://docs.begin.com
import { getTodos, upsertTodo, validate } from '../../models/todos.mjs'

export async function get (req) {
  const { filter = 'all' } = req.query
  let todos = await getTodos()
  if (req.session.problems) {
    let { problems, todo,...session } = req.session
    return {
      session,
      json: { problems, todos, todo }
    }
  }

  if (filter === 'active') {
    todos = todos.filter(todo => !todo.completed)
  } else if (filter === 'completed') {
    todos = todos.filter(todo => todo.completed)
  }

  return {
    json: { todos, filter }
  }
}

export async function post (req) {
  // Validate
  let { problems, todo } = await validate.create(req)
  if (problems) {
    return {
      session: { problems, todo },
      json: { problems, todo },
      location: '/todos'
    }
  }

  try {
    const result = await upsertTodo(todo)
    return {
      session: {},
      json: { todo: result },
      location: '/todos'
    }
  }
  catch (err) {
    return {
      session: { error: err.message },
      json: { error: err.message },
      location: '/todos'
    }
  }
}
