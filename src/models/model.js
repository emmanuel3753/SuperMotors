const mongoose = require('mongoose')

const modelSchema = new mongoose.Schema({
  id:{
    type: Number
  },
  tipo: {
    type: String,
    required: true
  },
  marca: {
    type: String,
    required: true
  },
  modelo: {
    type: String,
    required: true
  },
  specs: {
    type: String,
    required: true
  },
  imagen: {
    type: String,
    required: true
  },
  precio: {
    type: Number,
    required: true
  }

})

const mod = mongoose.model('mod', modelSchema)

module.exports = mod
