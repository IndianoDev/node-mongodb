const mongoose = require('mongoose')

const produtoSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true,
        minLength: 2,
        maxLength:100,
        uppercase: true,
        trim: true
    },
    preço: {
        type: Number,
        default: 0,
        min: [0, 'mais facil'],
        match: /^\d+(\.\d{1,2})?$/,
    },

    tamanho: String,
    tipo:{
         type: String,
         enum: ["bebidas","pizzas", "massas", "sobremesas"]
        },
    ingredientes: [String]
})

const  Produto = mongoose.model('Produto', produtoSchema)

module.exports = Produto

