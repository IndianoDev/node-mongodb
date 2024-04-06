

const mongoose = require('mongoose')

const ingredientesSchema = mongoose.Schema({
    nome: String,
  
})

const ingredientes = mongoose.model('ingredientes', ingredientesSchema)

module.exports = ingredientes
