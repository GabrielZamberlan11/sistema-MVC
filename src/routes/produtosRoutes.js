const produtosController = require('../controllers/produtosController');
const express = require('express');
const router = express.Router();

router.get('/produtos', produtosController.index);
router.delete('/produtos/:id',produtosController.delete);

module.exports =  router ;