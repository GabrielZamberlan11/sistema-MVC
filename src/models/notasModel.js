const pool = require('../config/db');

const Notas = {
    listarTodos: async () => {

        const [rows] = await pool.execute(`SELECT * FROM notas`);
        return rows;
    },
    deletar: async (id) => {
        const [result] = await pool.execute(`DELETE FROM notas WHERE id= ?`, [id]);
        return result.affectedRows;
    },
    criar: async (dados) => {
        const query = `
        INSERT INTO notas
        (nome_razao_social, nome_social_fantasia, cep, endereco, numero, bairro, cidade, estado, pais, documento, tipo, email)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const values = [
            dados.nome_razao_social,
            dados.nome_social_fantasia || null,
            dados.cep || null,
            dados.endereco || null,
            dados.numero || null,
            dados.bairro || null,
            dados.cidade || null,
            dados.estado || null,
            dados.pais || 'Brasil',
            dados.documento,
            dados.tipo,
            dados.email || null
        ];
        const [result] = await pool.execute(query, values);
        return result.insertId;
    },




}

module.exports = Notas;