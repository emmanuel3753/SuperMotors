const mongoose = require('mongoose')

//var connectionURL = 'mongodb+srv://emmanuel3753:Vegetta_14@cluster0-bpsn8.mongodb.net/NuevaBase?retryWrites=true'

if(process.env.NODE_ENV === 'production'){
  var BD = process.env.BD
}else{
  const conectionURL = require('../config.js')
  var BD = conectionURL.connectionURL
}

mongoose.connect( BD, {
  useNewUrlParser: true,
  useCreateIndex: true
})
