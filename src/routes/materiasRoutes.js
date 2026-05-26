const materiasController = require('../controllers/materiasController');
const express = require('express');
const router = express.Router();

router.get('/materias', materiasController.index);
router.delete('/materias/:id',materiasController.delete);
router.post('/materias', materiasController.store);
router.put('/materias/:id', materiasController.update);
module.exports =  router ;