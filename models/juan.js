
const mongoose = require('mongoose')

const juanSchema = mongoose.Schema({
    nome: String,
  
})

const juan = mongoose.model('juan', juanSchema)

module.exports = juan
