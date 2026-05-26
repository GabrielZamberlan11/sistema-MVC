const Notas = require('../models/notasModel');

const notasController = {
    index: async (req, res) => {
        try {
            const notas = await Nota.listarTodos();
            res.json(notas);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    delete: async (req, res) => {
        const { id } = req.params;
        try {
            const affectedRows = await Nota.deletar(id);
            if (affectedRows === 0) {
                return res.status(404).json({ message: 'Registro nao encontrado' })
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    store: async (req, res) => {
        try {
            const insertId = await Nota.criar(req.body);
            res.status(201).json({ id: insertId, ...req.body });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    update: async (req, res) => {
        const { id } = req.params;
        try {
            const affectedRows = await Nota.atualizar(id, req.body);
            if (affectedRows === 0) {
                return res.status(404).json({ message: 'Registro não encontrado' });
            }
            res.json({ id, ...req.body });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }


};
module.exports = NotasController;