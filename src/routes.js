const express = require('express')
const router = express.Router()
const Product = require('./controllers/products')


const cors = require('cors')

const users = require('./controllers/users.js')
const todos = require('./controllers/todos.js')
const cart = require('./controllers/carts.js')
const auth = require('./middleware/auth')
//CORS

/* GET home page*/
router.get('/', function(req, res, next){
  var products = Product.find()
  
})


router.all('*', cors())
router.get('/users', auth, users.getUser)
router.post('/users/login', users.login)
router.post('/users/logout', auth, users.logout)
router.post('/users', users.createUser)  // signup
router.patch('/users', auth, users.updateUser)
router.delete('/users', auth, users.deleteUser)
router.get('/name', users.getName)

router.get('/motos', Product.getModels)
router.get('/cart', auth, cart.getCarts)
router.post('/cart', auth, cart.createCart)
router.post('/cart/:id', auth, cart.deleteCart)



router.get('/todos/:id', auth, todos.getTodo)
router.get('/todos', auth, todos.getTodos)
router.post('/todos', auth, todos.createTodo)
router.patch('/todos/:id', auth, todos.updateTodo)
router.delete('/todos/:id', auth, todos.deleteTodo)


router.get('*', function(req, res) {
  res.send({
    error: 'This route does not exist, try /users or /todos'
  })
})

module.exports = router

