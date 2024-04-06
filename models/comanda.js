

const mongoose = require('mongoose')

const comandaSchema = mongoose.Schema({
    nome: String,
  
})

const comanda = mongoose.model('comanda', comandaSchema)

module.exports = comanda
