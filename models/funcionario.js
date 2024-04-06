

const mongoose = require('mongoose')

const funcionarioSchema = mongoose.Schema({
    nome: String,
  
})

const funcionario = mongoose.model('funcionario', funcionarioSchema)

module.exports = funcionario
