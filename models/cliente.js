

const mongoose = require('mongoose')

const clienteSchema = mongoose.Schema({
    nome: String,
  
})

const cliente = mongoose.model('cliente', clienteSchema)

module.exports = cliente
