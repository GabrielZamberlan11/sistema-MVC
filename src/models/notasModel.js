const pool = require('../config/db');

const Notas = {
    listarTodos: async () => {

        const [rows] = await pool.execute(`SELECT * FROM provas`);
        return rows;
    },
    deletar: async (id) => {
        const [result] = await pool.execute(`DELETE FROM provas WHERE id= ?`, [id]);
        return result.affectedRows;
    },
    criar: async (dados) => {
        const query = `
        INSERT INTO provas
        (id_aluno, nota, id_materia)
        VALUES (?, ?, ?)
        `;
        const values = [
            dados.id_aluno,
            dados.nota,
            dados.id_materia,
            id
        ];
        const [result] = await pool.execute(query, values);
        return result.insertId;
    },




}

module.exports = Notas;