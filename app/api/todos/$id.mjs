// View documentation at: https://docs.begin.com
import { getTodo, upsertTodo, validate } from '../../../models/todos.mjs'

export async function get (req) {
  if (req.session.problems) {
    let { problems, todo, ...session } = req.session
    return {
      session,
      json: { problems, todo }
    }
  }

  const id = req.pathParameters?.id
  const result = await getTodo(id)
  return {
    json: { todo: result }
  }
}

export async function post (req) {
  const id = req.pathParameters?.id

  // Validate
  let { problems, todo } = await validate.update(req)
  if (problems) {
    return {
      session: { problems, todo },
      json: { problems, todo },
      location: `/todos/${todo.key}`
    }
  }

  try {
    const result = await upsertTodo({key: id, ...todo})
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
