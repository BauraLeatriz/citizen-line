const Database = require('../config/database');

class RelatorioRepository {
    buscarChamadosFiltrados({ status, categoria_id, cep, dataInicio, dataFim }) {
        return new Promise((resolve, reject) => {
            const db = Database.getInstance();
            let query = `
                SELECT ch.id, ch.titulo, ch.descricao, ch.status, ch.cep,
                       c.nome AS categoria
                FROM chamados ch
                JOIN categorias c ON ch.categoria_id = c.id
                WHERE 1=1
            `;
            const params = [];

            if (status) { query += ' AND ch.status = ?'; params.push(status); }
            if (categoria_id) { query += ' AND ch.categoria_id = ?'; params.push(categoria_id); }
            if (cep) { query += ' AND ch.cep = ?'; params.push(cep); }

            query += ' ORDER BY ch.id DESC';

            db.all(query, params, (err, rows) => {
                if (err) reject(err);
                else resolve(rows);
            });
        });
    }
}

module.exports = new RelatorioRepository();