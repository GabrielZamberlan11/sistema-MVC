const pool = require('../config/db');

const Alunos = {
    listarTodos: async () => {

        const [rows] = await pool.execute(`SELECT * FROM alunos`);
        return rows;
    },
    deletar: async (id) => {
        const [result] = await pool.execute(`DELETE FROM alunos WHERE id= ?`, [id]);
        return result.affectedRows;
    },
    criar: async (dados) => {
        const query = `
        INSERT INTO alunos
        (nomeCompleto, dtNasc, cpf, nomePai, nomeMae)
        VALUES (?, ?, ?, ?, ?)
        `;
        const values = [
            dados.nomeCompleto,
            dados.dtNasc,
            dados.cpf,
            dados.nomePai,
            dados.nomeMae
        ];
        const [result] = await pool.execute(query, values);
        return result.insertId;
    },
    atualizar: async (id, dados) => {
        const query = `
            UPDATE alunos
            SET nomeCompleto = ?, dtNasc = ?, cpf = ?, nomePai = ?,
            nomeMae = ?
            WHERE id = ?
            `;
        const values = [
            dados.nomeComplto,
            dados.dtNasc,
            dados.cpf,
            dados.nomePai,
            dados.nomeMae,
            id
        ];
        const [result] = await pool.execute(query, values);
        return result.affectedRows;
    }
}

module.exports = Alunos;