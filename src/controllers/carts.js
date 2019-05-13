const Cart = require('../models/cart')



const getCarts = function(req, res) {
  // solo podemos hacer GET de los todos del usuario que hizo login
  Cart.find({ createdBy: req.user._id}).then(function(carts) {
    res.send(carts)
  }).catch(function(error){
    res.status(500).send(error)
  })
}

const createCart = function(req, res){
    // los ... son para copiar todo el req.body
    const cart = new Cart({
      item: req.body.item,
      createdBy: req.user._id
    })
    cart.save().then(function() {
      return res.send(cart)
    }).catch(function(error) {
      return res.status(400).send({ error: error })
    })
}

const deleteCart = function(req, res) {
    const _id = req.params.id
    Cart.findOneAndDelete({ _id, createdBy: req.user._id }).then(function(cart){
      if(!cart) {
        return res.status(404).send({ error: `Task with id ${_id} not found.`})
      }
      return res.send(cart)
    }).catch(function(error) {
      res.status(505).send({ error: error })
    })
}

module.exports = {
  createCart : createCart,
  deleteCart : deleteCart,
  getCarts : getCarts
}