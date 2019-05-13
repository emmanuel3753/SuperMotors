const jwt = require('jsonwebtoken')

const User = require('../models/user')

if(process.env.NODE_ENV === 'production'){
  var KEYSECRET = process.env.KEYSECRET
}else{
  const secret = require('../config.js')
  var KEYSECRET = secret.secret
}

const auth = function( req, res, next ) {
  try {
    const token = req.header('Authorization').replace('Bearer ', '')
    const decoded = jwt.verify(token, KEYSECRET)
    User.findOne({ _id: decoded._id, 'tokens.token': token }).then(function(user) {
      if(!user) {
        throw new Error()
      }
      req.token = token
      req.user = user
      console.log(token)
      next()
    }).catch(function(error) {
      res.status(401).send({ error: 'Authenticate plz'})
    })
  } catch(e) {
    res.status(401).send({ error: 'Authenticate plz'})
  }
}

module.exports = auth