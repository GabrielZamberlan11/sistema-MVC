const pessoasController = require('../controllers/pessoasController');
const express = require('express');
const router = express.Router();

router.get('/pessoas', pessoasController.index);
router.delete('/pessoas/:id',pessoasController.delete);
router.post('/pessoas', pessoasController.store);
router.put('/pessoas/:id', pessoasController.update);
module.exports =  router ;