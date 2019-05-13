const Model = require('../models/model')

const getModels = function(req, res) {
    // solo podemos hacer GET de los todos del usuario que hizo login
    Model.find().then(function(modelo) {
      res.send(modelo)
    }).catch(function(error){
      res.status(500).send(error)
    })
  }
  
  module.exports = {
      getModels: getModels
  }