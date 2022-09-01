// View documentation at: https://docs.begin.com
import { deleteTodo } from '../../../../models/todos.mjs'

export async function post (req) {
  const id = req.pathParameters?.id

  try {
    await deleteTodo(id)
    return {
      session: {},
      json: null,
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
