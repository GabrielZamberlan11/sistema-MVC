const alunosController = require('../controllers/alunosController');
const express = require('express');
const router = express.Router();

router.get('/alunos', alunosController.index);
router.delete('/alunos/:id',alunosController.delete);
router.post('/alunos', alunosController.store);
router.put('/alunos/:id', alunosController.update);
module.exports =  router ;