const mongoose = require('mongoose')

const produtoSchema = mongoose.Schema({
    nome: String,
    preço: Number,
    tamanho: String,
    tipo: String
})

const  Produto = mongoose.model('Produto', produtoSchema)

module.exports = Produto

