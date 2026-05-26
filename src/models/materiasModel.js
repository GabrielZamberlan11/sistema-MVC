const pool = require('../config/db');

const Materia = {
    listarTodos: async () => {

        const [rows] = await pool.execute(`SELECT * FROM materias`);
        return rows;
    },
    deletar: async (id) => {
        const [result] = await pool.execute(`DELETE FROM materias WHERE id= ?`, [id]);
        return result.affectedRows;
    },
    criar: async (dados) => {
        const query = `
        INSERT INTO materias
        (nome)
        VALUES (?)
        `;
        const values = [
            dados.nome
            
        ];
        const [result] = await pool.execute(query, values);
        return result.insertId;
    },
    atualizar: async (id, dados) => {
        const query = `
            UPDATE materias
            SET nome = ?
            WHERE id = ?
            `;
        const values = [
            dados.nome,
            id
        ];
        const [result] = await pool.execute(query, values);
        return result.affectedRows;
    }




}

module.exports = Materia;