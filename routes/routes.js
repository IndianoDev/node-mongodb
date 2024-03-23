const express = require('express')
const Produto = require('../models/produto')
const router = express.Router()


router.get('/', function(req, res){
    res.json({})
})

router.get('/produto', async function(req, res){
    res.json(await Produto.find())
})

router.post('/produto', async function(req, res){
    res.json(await Produto.create(req.body))
})

router.get('/produto/:id', async function(req, res){
    res.json(await Produto.findById(req.params.id))
})

router.delete('/produto/:id', async function(req, res){
    res.json(await Produto.findByIdAndDelete(req.params.id))
})

router.put('/produto/:id', async function(req, res){
    res.json(await Produto.findByIdAndUpdate(req.params.id, req.body))
})



module.exports = router
