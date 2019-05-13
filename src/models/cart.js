const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
  item: {
    type: Number,
    required: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
})

const cart = mongoose.model('modelo', cartSchema)

module.exports = cart