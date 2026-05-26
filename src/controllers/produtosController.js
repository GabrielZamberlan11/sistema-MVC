const Produtos= require('../models/produtosModel');

const produtosController= {
    index: async(req,res)=>{
        try {
            const produtos=await Produtos.listarTodos();
            res.json(produtos);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    delete: async(req,res)=>{
        const {id}= req.params;
        try {
            const affectedRows=await Produtos.deletar(id);
            if (affectedRows===0) {
                return res.status(404).json({message: 'Registro nao encontrado'})
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

};
module.exports= produtosController;