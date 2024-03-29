const mongoose = require('mongoose')
const validator = require('validator')

const todoSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo
