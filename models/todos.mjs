import data from '@begin/data'
import { validator } from '@begin/validator'
import { Todo } from '../app/schemas/todo.mjs'

const deleteTodo = async function (key) {
  return data.destroy({ table: 'todos', key })
}

const upsertTodo = async function (todo) {
  return data.set({ table: 'todos', ...todo })
}

const getTodo = async function (key) {
  return data.get({ table: 'todos', key })
}

const getTodos = async function () {
  return data.get({ table: 'todos' })
}

const validate = {
  shared (req) {
    return validator(req, Todo)
  },
  async create (req) {
    let { valid, problems, data } = validate.shared(req)
    if (req.body.key) {
      problems['key'] = { errors: '<p>should not be included on a create</p>' }
    }
    // Insert your custom validation here
    return !valid ? { problems, todo: data } : { todo: data }
  },
  async update (req) {
    let { valid, problems, data } = validate.shared(req)
    // Insert your custom validation here
    return !valid ? { problems, todo: data } : { todo: data }
  }
}


export {
  deleteTodo,
  getTodo,
  getTodos,
  upsertTodo,
  validate
}
