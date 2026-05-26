const pool= require('../config/db');

const Produtos={
    listarTodos: async()=>{
        const [rows]= await pool.execute(`SELECT * FROM produtos`);
        return rows;
    },
    deletar: async(id)=>{
        const [result]= await pool.execute(`DELETE FROM produtos WHERE id= ?`,[id]);
        return result.affectedRows;
    }



    
}

module.exports= Produtos;