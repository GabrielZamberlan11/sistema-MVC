const notasController = require('../controllers/notasController');
const express = require('express');
const router = express.Router();

router.get('/notas', notasController.index);
router.delete('/notas/:id',notasController.delete);
router.post('/notas', notasController.store);
router.put('/notas/:id', notasController.update);
module.exports =  router ;