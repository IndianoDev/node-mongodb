const express = require('express')
const ProdutoController = require('../controllers/ProdutoController')
const Produto = require('../models/produto')
const router = express.Router()


router.get('/', function(req, res){
   res.json({})
})
//produtos
router.get('/produto',(req, res) => ProdutoController.getAll(req, res))
router.post('/produto',(req, res) => ProdutoController.create(req, res))
router.get('/produto/:id',(req, res) => ProdutoController.get(req, res))
router.put('/produto/:id',(req, res) => ProdutoController.update(req, res))
router.delete('/produto/:id',(req, res) => ProdutoController.delete(req, res))

//comandas
router.get('/comandas',(req, res) => ProdutoController.getAll(req, res))
router.post('/comandas',(req, res) => ProdutoController.create(req, res))
router.get('/comandas/:id',(req, res) => ProdutoController.get(req, res))
router.put('/comandas/:id',(req, res) => ProdutoController.update(req, res))
router.delete('/comandas/:id',(req, res) => ProdutoController.delete(req, res))

//funcionarios
router.get('/funcionarios',(req, res) => ProdutoController.getAll(req, res))
router.post('/funcionarios',(req, res) => ProdutoController.create(req, res))
router.get('/funcionarios/:id',(req, res) => ProdutoController.get(req, res))
router.put('/funcionarios/:id',(req, res) => ProdutoController.update(req, res))
router.delete('/funcionarios/:id',(req, res) => ProdutoController.delete(req, res))



module.exports = router
